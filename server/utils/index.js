const request = require('request');
const sha1 = require('sha1');

// 这些配置记得替换你的appid和secret
let config = {
    appID: "wx5b295da0389bdbf0",// 微信公众号appID
    appSecret: "adb88c32a0029935cfde816c3349656d", //微信公众号里有appSecret
    getAccessTokenUrl: 'https://api.weixin.qq.com/cgi-bin/token',
    getJsapiTicketUrl: 'https://api.weixin.qq.com/cgi-bin/ticket/getticket'
};

// 为了应对缓存压力，不要每次刷新token，访问量高会带来很大问题
// 因为获取access_token的接口，一天最多调用2000次，每次有效期是两个小时
let CACHE = {
    ticket: '',
    ticketTimeout: 0,
    ticketTime: 0,
    accessToken: '',
    accessTokenTimeout: 0,
    accessTokenTime: 0
};

/** 
 * 微信分享 
 */
class WxShare {
    constructor() {
        this.refreshAccessToken().then(res => {
            this.refreshJsapiTicket(res);
        }).catch(e => {
            console.log(e);
        });
    }

    /**
     * 刷新access_token
     */
    refreshAccessToken () {
        return new Promise((resolve, reject) => {
            const tokenUrl = `${config.getAccessTokenUrl}?grant_type=client_credential&appid=${config.appID}&secret=${config.appSecret}`;
            request(tokenUrl, (error, response, body) => {
                console.error('refreshAccessToken', body);
                if (typeof body === 'string') {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {
                        body = {
                            errcode: '-1000',
                            body
                        };
                    }
                }
                
                if (body && (!body.errcode || body.errcode == 0)) {
                    CACHE.accessToken = body.access_token;
                    CACHE.accessTokenTimeout = body.expires_in * 500;
                    CACHE.accessTokenTime = new Date().getTime();
                    resolve(CACHE.accessToken);
                } else if (body) {
                    reject(body.errmsg);
                } else {
                    reject('未知异常');
                }
            });
        });
    }

    /**
     * 刷新ticket
     * @param {*} access_token 
     * @param {*} callback 
     */
    refreshJsapiTicket(access_token) { // Jsapi_ticket 
        return new Promise((resolve, reject) => {
            let ticketUrl = `${config.getJsapiTicketUrl}?access_token=${access_token}&type=jsapi`;
            request(ticketUrl, function (err, response, content) {
                content = JSON.parse(content);
                console.error('refreshJsapiTicket', content);
                if (content && (content.errcode == 0 || !content.errcode)) {
                    CACHE.ticket = content.ticket;
                    CACHE.ticketTimeout = content.expires_in * 500;
                    CACHE.accessTokenTime = new Date().getTime();
                    resolve(CACHE.ticket); // ticket 
                } else if (content) {
                    reject(content.errmsg);
                } else {
                    reject('未知异常');
                }
            })
        });
    };

    async getShareConfig(url) { // 获取access_token 
        let access_token = CACHE.accessToken;
        let ticket = CACHE.ticket;
        
        if (!access_token || (new Date().getTime() - CACHE.accessTokenTime > CACHE.accessTokenTimeout)) {
            access_token = await this.refreshAccessToken();
            ticket = await this.refreshJsapiTicket(access_token);
        }
        let nonceStr = this.createNonceStr();
        let timestamp = this.createTimestamp()
        let signature = this.createSign({
            jsapi_ticket: ticket,
            nonceStr, timestamp, url
        });

        return {
            appID: config.appID,
            access_token,
            ticket,
            timestamp,
            nonceStr,
            signature
        };
    };

    /** 
     * 随机字符串 
     */
    createNonceStr() {
        return Math.random().toString(36).slice(2, 15);
    };
    /** 
     * 时间戳 
     */
    createTimestamp() {
        return String(parseInt(new Date().getTime() / 1000));
    };
    /** 
     * 拼接字符串 
     * @param {*} args 
     */
    rawString(args) {
        var keys = Object.keys(args);
        keys = keys.sort()
        var newArgs = {};
        keys.forEach(function (key) {
            newArgs[key.toLowerCase()] = args[key];
        });
        var string = '';
        for (var k in newArgs) {
            string += '&' + k + '=' + newArgs[k];
        }
        string = string.slice(1);
        return string;
    };

    /**
     * 新的
     * @param {*} config 
     */
    createSign(config) {
        let _this = this;
        var ret = {
            jsapi_ticket: config.jsapi_ticket,
            nonceStr: config.nonceStr,
            timestamp: config.timestamp,
            url: config.url
        };
        let url = ret.url;
        let index = url.indexOf('#');
        let res = Object.assign({}, ret, {
            url: index > -1 ? url.substr(0, index) : url
        });
        var string = _this.rawString(res);
        var shaObjs = sha1(string);
        return shaObjs;
    }
}

module.exports = WxShare;
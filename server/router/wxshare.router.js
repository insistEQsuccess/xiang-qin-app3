const Router = require('koa-router')
const WxShare = require('../utils/index')
const router = new Router()
const wxShare = new WxShare();

router.post('/wx/wxshare', async (ctx) => {
	try {
    const { url } = ctx.request.body;
    const config = await wxShare.getShareConfig(url);
    ctx.body = {data: config, code: 200}
  } catch (err) {
      ctx.body = {
        errorMsg: JSON.stringify(err),
        code: 400
      };
  }
})

module.exports = { routes: router.routes(), allowedMethods:router.allowedMethods() }
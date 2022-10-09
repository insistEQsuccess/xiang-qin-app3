const CryptoJS = require("crypto-js");

// 密钥
const MIYAO = "q6w6oQ1Jz0V82jZ9";//AES 加密
const iv = "rb!nBwXv4C%Gr^84";
// 加密
export function encrypt(){
  // const param: any = { timestamp: Date.now(), os: 'h5', token: '', userId: '' }
  const param: any = {"userId":"","os":"Iphone","imei":"c9a13587821f491685b75e9d1b83aaef","model":"iPhone Simulator","version":10,"token":"","timestamp": Date.now()}
  const userId = localStorage.getItem('userId')
  const token = localStorage.getItem('token')
  if (userId) {
    param.userId = userId
  }
  if (token) {
    param.token = token
  }
  let ret = CryptoJS.AES.encrypt(JSON.stringify(param), CryptoJS.enc.Utf8.parse(MIYAO), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  }).toString();
  return ret
}
// 解密
export function decropt (enStr: any) {
  return CryptoJS.AES.decrypt(enStr, MIYAO).toString(CryptoJS.enc.Utf8);
}

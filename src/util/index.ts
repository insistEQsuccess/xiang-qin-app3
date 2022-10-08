const CryptoJS = require("crypto-js");

// 密钥
export const MIYAO = "q6w6oQ1Jz0V82jZ9";//AES 加密
const iv = "rb!nBwXv4C%Gr^84";
// 加密
export function encrypt(){
  const param: any = { timestamp: Date.now(), os: 'h5' }
  const user_id = localStorage.getItem('user_id')
  if (user_id) {
    param.userId = user_id
  }
  return CryptoJS.AES.encrypt(JSON.stringify(param), MIYAO, {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CFB,
    padding: CryptoJS.pad.AnsiX923
  }).toString();
}
// 解密
export function decropt (enStr: any) {
  return CryptoJS.AES.decrypt(enStr, MIYAO).toString(CryptoJS.enc.Utf8);
}

const Koa = require('koa');
const bodyparser = require('koa-bodyparser');
// const xmlParser = require('koa-xml-body');


const app = new Koa();

const { routes: validateRoutes, allowedMethods: validateAllowedMethods } = require('./router/validate.router');
const { routes: wxRoutes, allowedMethods: wxAllowedMethods } = require('./router/wxshare.router');

// app.use(xmlParser());
app.use(bodyparser());
app.use(validateRoutes);
app.use(validateAllowedMethods);
app.use(wxRoutes);
app.use(wxAllowedMethods);

app.listen(3336);

console.log('服务器已经跑起来了.....777');
const Koa = require("koa")
const serve = require("koa-static")
const app = new Koa()
app.use(serve(__dirname+"/dist"))
app.listen(3336,function(){
    console.log("koa server running at port 3336");
})
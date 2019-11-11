const Koa = require("koa"),
  router = require("koa-router")(),
  path = require("path"),
  bodyParser = require("koa-bodyparser")

//引入子模块

var admin = require("./routes/admin.js")
var api = require("./routes/api.js")
var index = require("./routes/index.js")

var app = new Koa()
app.use(bodyParser())

//配置路由 (首页的路由，访问链接对应：http://localhost:8008/)
router.use(index)
/*
  /admin   配置子路由  层级路由

 /admin/user
 */
router.use("/admin", admin)
/*
 /api/newslist   新闻列表的api
 */
router.use("/api", api) /*在模块里面暴露路由并且启动路由*/

//启动路由
app.use(router.routes()).use(router.allowedMethods())

app.listen(8008)

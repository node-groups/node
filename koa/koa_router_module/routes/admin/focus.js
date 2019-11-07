/**
 * Created by Administrator on 2018/3/20 0020.
 */

/*轮播图的增加修改删除*/

var router = require("koa-router")()

router.get("/", async ctx => {
  ctx.body = "轮播图"
})

router.get("/add", async ctx => {
  ctx.body = "添加轮播图"
})

router.get("/edit", async ctx => {
  ctx.body = "编辑轮播图"
})
router.get("/delete", async ctx => {
  ctx.body = "删除轮播图"
})

module.exports = router.routes()

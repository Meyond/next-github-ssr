const Koa = require('koa')
const Router = require('koa-router')
const Next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = Next({ dev })
const handle = app.getRequestHandler() // 用next的handler处理http请求

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  // next/router的路由映射没有定义实际页面会404
  // 因此使用koa-router实现真正的映射
  router.get('/test/:id', async (ctx) => {
    const { id } = ctx.params
    await handle(ctx.req, ctx.res, {
      pathname: "/test",
      query: { id }
    })
    ctx.respond = false
  })

  server.use(router.routes()) // 使用router中间件

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.listen(3000, () => {
    console.log('Koa listening on 3000 !')
  })
})
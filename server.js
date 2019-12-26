const Koa = require('koa')
const Router = require('koa-router')
const Next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = Next({ dev })
const handle = app.getRequestHandler() // 用next的handler处理http请求

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  // server.use(router.routes()) // 使用router中间件

  server.listen(3000, () => {
    console.log('Koa listening on 3000 !')
  })
})
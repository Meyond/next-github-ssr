const Koa = require('koa')
const Router = require('koa-router')
const Next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = Next({ dev })
const handle = app.getRequestHandler() // 用它处理http请求

// app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  router.get('/', (ctx, next) => {
    ctx.body = 'default nothing'
  })

  router.get('/test/:id', (ctx, next) => {
    ctx.body = ctx.params
  })

  // server.use(async (ctx, next) => {
  //   await handle(ctx.req, ctx.res)
  //   ctx.respond = false
  // })

  server.use(router.routes()) // 使用router中间件

  server.listen(3000, () => {
    console.log('Koa listening on 3000 !')
  })
// })
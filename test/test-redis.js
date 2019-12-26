async function test() {
  const Redis = require('ioredis')

  const redis = new Redis({
    port: 6379
  })

  await redis.set('a', 123)
  await redis.setex('b', 20, 123)
  const keys = await redis.keys('*')

  console.log(keys)
  console.log(await redis.get('a'))
}

test()
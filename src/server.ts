import { env } from './env'
import { app } from './app'

app.get('/health', async (_, reply) => {
  return reply.send('Application is up and running')
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log(`🚀 Application is running on port ${env.PORT}`)
  })

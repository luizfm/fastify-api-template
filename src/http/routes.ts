import { FastifyInstance } from 'fastify'
import { registerUser } from './controllers/register-user'
import { getUsers } from './controllers/get-users'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', registerUser)
  app.get('/users', getUsers)
}

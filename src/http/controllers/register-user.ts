import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository'
import { CheckUserExistsError } from '@/use-cases/errors/check-user-exists-error'
import { RegisterUser } from '@/use-cases/register-user'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function registerUser(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password_hash: z.string().min(6),
  })

  const { name, email, password_hash } = registerBodySchema.parse(request.body)

  const usersRepository = new PrismaUserRepository()
  const registerUseUseCase = new RegisterUser(usersRepository)

  try {
    await registerUseUseCase.execute({ name, email, password_hash })
  } catch (error) {
    if (error instanceof CheckUserExistsError) {
      return reply.status(409).send({ message: error.message })
    }
  }

  return reply.status(201).send()
}

import { PrismaUserRepository } from '@/repositories/prisma/prisma-user-repository'
import { GetUsers } from '@/use-cases/get-users'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function getUsers(_: FastifyRequest, reply: FastifyReply) {
  const prismaUserRepository = new PrismaUserRepository()
  const getUsersUseCase = new GetUsers(prismaUserRepository)

  const users = await getUsersUseCase.execute()

  return reply.status(200).send({ users })
}

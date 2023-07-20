import { FastifyError, FastifyReply, FastifyRequest } from 'fastify'
import { ZodError } from 'zod'

export async function globalErrorHandler(
  error: FastifyError,
  _: FastifyRequest,
  reply: FastifyReply,
) {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error', issues: error.format() })
  } else {
    // TODO: Add any application monitoring tool like NewHelic / Sentry / DataDog
  }

  return reply.status(500).send({ message: 'Internal server error!' })
}

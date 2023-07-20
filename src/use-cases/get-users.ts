import { UserOmitDTO } from '@/repositories/dtos/user-dto'
import { UsersRepository } from '@/repositories/users-repository'

export class GetUsers {
  constructor(private usersRepository: UsersRepository) {}

  async execute(): Promise<UserOmitDTO[]> {
    return this.usersRepository.findAll()
  }
}

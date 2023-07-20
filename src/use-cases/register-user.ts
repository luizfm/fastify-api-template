import { UserDTO } from '@/repositories/dtos/user-dto'
import { UsersRepository } from '@/repositories/users-repository'
import { hash } from 'bcryptjs'
import { CheckUserExistsError } from './errors/check-user-exists-error'

export class RegisterUser {
  constructor(private usersRepository: UsersRepository) {}

  async execute(data: UserDTO): Promise<UserDTO> {
    const { name, email, password_hash } = data

    const passwordHash = await hash(password_hash, 6)

    const checkUserExists = await this.usersRepository.findByEmail(email)

    if (checkUserExists) {
      throw new CheckUserExistsError()
    }

    return await this.usersRepository.create({
      name,
      email,
      password_hash: passwordHash,
    })
  }
}

import { UserDTO, UserOmitDTO } from './dtos/user-dto'

export interface UsersRepository {
  create(data: UserDTO): Promise<UserDTO>
  findByEmail(email: string): Promise<UserDTO | null>
  findAll(): Promise<UserOmitDTO[]>
}

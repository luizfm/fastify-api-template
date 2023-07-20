export interface UserDTO {
  id?: string
  name: string
  email: string
  password_hash: string
  created_at?: Date
}

export type UserOmitDTO = Omit<UserDTO, 'password_hash'>

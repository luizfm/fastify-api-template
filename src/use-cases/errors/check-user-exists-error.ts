export class CheckUserExistsError extends Error {
  constructor() {
    super('User email is already in use!')
  }
}

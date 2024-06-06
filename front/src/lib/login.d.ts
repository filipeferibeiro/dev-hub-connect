export interface LoginData {
  user: {
    id: string
    name: string
    username: string
    email: string
    birthday: string
  }
  backendTokens: {
    accessToken: string
  }
}

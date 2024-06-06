import NextAuth from 'next-auth/next'
import { JWT } from 'next-auth/jwt'
import { LoginData } from './login'

declare module 'next-auth' {
  interface Session extends LoginData {}
}

declare module 'next-auth/jwt' {
  interface JWT extends LoginData {}
}

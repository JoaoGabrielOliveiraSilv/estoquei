import { SignJWT } from 'jose'

const JWT_SECRET = import.meta.env.VITE_JWT_SECRET ?? 'change-me-in-production'

export async function generateToken(): Promise<string> {
  const secret = new TextEncoder().encode(JWT_SECRET)
  return new SignJWT({ sub: '1' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(secret)
}

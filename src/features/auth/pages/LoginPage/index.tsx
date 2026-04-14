import { Package } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { login } from '@/shared/api/auth-api'
import { Button } from '@/shared/components/ui/Button'
import { Input } from '@/shared/components/ui/Input'
import { setToken } from '@/shared/utils/auth'

export default function LoginPage() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const { token } = await login(username, password)
      setToken(token)
      navigate('/', { replace: true })
    } catch {
      setError('Usuário ou senha inválidos.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-estoquei-bg flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="w-10 h-10 bg-estoquei-accent rounded-lg flex items-center justify-center">
            <Package size={22} aria-hidden />
          </div>
          <h1 className="text-estoquei-text text-xl font-semibold">estoquei</h1>
          <p className="text-estoquei-text3 text-sm">Faça login para continuar</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-estoquei-bg2 border border-estoquei-border rounded-lg p-6 flex flex-col gap-4"
        >
          {error && (
            <p role="alert" className="text-estoquei-danger text-sm">
              {error}
            </p>
          )}

          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-estoquei-text3 text-xs font-medium uppercase tracking-[.08em]">
              Usuário
            </label>
            <Input
              id="username"
              type="text"
              placeholder="Digite seu usuário"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-estoquei-text3 text-xs font-medium uppercase tracking-[.08em]">
              Senha
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            variant="accent"
            className="w-full mt-2"
            loading={loading}
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  )
}

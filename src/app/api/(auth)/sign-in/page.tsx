'use client'

import { authClient } from '@/lib/auth-client'

export default function SignIn() {
  const handleLogin = async () =>
    authClient.signIn.social({ provider: 'google', callbackURL: '/dashboard' })

  return (
    <main className="flex min-h-screen items-center justify-center">
      <button
        onClick={handleLogin}
        className="rounded-lg bg-black px-6 py-3 text-white hover:opacity-80"
      >
        Sign in with Google
      </button>
    </main>
  )
}
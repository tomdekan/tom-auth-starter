import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

export default async function Dashboard() {
  const session = await auth.api.getSession({ headers: await headers() })

  if (!session) {
    // RSC can't redirect yet; show a fallback.
    return <p className="p-10 text-center">Redirecting to sign-in…</p>
  }

  return (
    <section className="p-10">
      <h1 className="text-2xl font-bold">Welcome, {session.user.name}!</h1>
      <p className="mt-2">You made it to the protected area. 🎉</p>
    </section>
  )
}
import { redirect } from 'next/navigation'
import { SignOutButton } from '../../components/SignOutButton'
import { authClient } from '@/lib/auth-client'

export default async function Dashboard() {
  const sessionResponse = await authClient.getSession()
  const session = sessionResponse.data


  if (!session) {
    redirect('/sign-in')
  }

  return (
    <section className="p-10">
      <h1 className="text-2xl font-bold">Welcome, {session.user.name}!</h1>
      <p className="mt-2">You made it to the protected area. 🎉</p>
      <SignOutButton />
    </section>
  )
}
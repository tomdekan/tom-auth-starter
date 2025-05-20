import { auth } from '../../../auth'
import { headers } from 'next/headers'
import { SignOutButton } from '../../components/SignOutButton'
import { redirect } from 'next/navigation'
export default async function Dashboard() {
  const session = await auth.api.getSession({ headers: await headers() })

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
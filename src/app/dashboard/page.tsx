import { redirect } from 'next/navigation'
import { SignOutButton } from '../../components/SignOutButton'
import { auth } from '../../../auth'
import { headers } from 'next/headers'

export default async function Dashboard() {
  const response = await auth.api.getSession({ headers: await headers() })
  if (!response) {
    redirect('/sign-in')
  }
  const { user } = response

  console.log('user in dashboard', user)

  return (
    <section className="p-10">
      <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
      <p className="mt-2">You made it to the protected area. 🎉</p>
      <SignOutButton />
    </section>
  )
}
import Link from "next/link";
import { SignOutButton } from "../components/SignOutButton";
import { authClient } from "@/lib/auth-client";

export default async function Home() {
  const { data: session, error } = await authClient.getSession()

  if (error) {
    console.error('Error fetching session:', error)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-950 text-white">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header with user info */}
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
            <h1 className="text-2xl font-bold">Auth Demo</h1>
          </div>
          
          {session ? (
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full pl-3 pr-5 py-2 hover:bg-white/15 transition">
              {session.user.image ? (
                <img
                  src={session.user.image}
                  alt={`${session.user.name}'s profile`}
                  width={32}
                  height={32}
                  className="rounded-full ring-2 ring-blue-400"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <span>{session.user.name?.[0]}</span>
                </div>
              )}
              <div>
                <p className="text-sm font-medium">{session.user.name}</p>
                <div className="flex items-center justify-between">
                  <Link href="/dashboard" className="text-xs text-blue-300 hover:underline">
                    Dashboard →
                  </Link>
                  <span className="px-2">•</span>
                  <SignOutButton />
                </div>
              </div>
            </div>
          ) : (
            <Link
              href="/sign-in"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-sm px-5 py-2 rounded-full transition-all"
            >
              <span>Sign In</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          )}
        </header>
        
        {/* Main content */}
        <main className="flex flex-col items-center">
          <div className="relative group mb-16">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-30 group-hover:opacity-80 transition duration-1000"></div>
            <div className="relative bg-black/50 backdrop-blur-md p-8 rounded-lg border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                Next.js Google Authentication
              </h2>
              <p className="text-lg text-gray-300 text-center">
                {session 
                  ? `You're signed in as ${session.user.name}. Explore the dashboard to see more.` 
                  : "Experience seamless authentication with Google. Sign in to get started."}
              </p>
              
              <div className="mt-8 flex justify-center">
                {session ? (
                  <Link 
                    href="/dashboard" 
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-lg px-6 py-3 text-white font-medium transition transform hover:scale-105"
                  >
                    View Dashboard
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                ) : (
                  <Link 
                    href="/sign-in" 
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 rounded-lg px-6 py-3 text-white font-medium transition transform hover:scale-105"
                  >
                    Sign in with Google
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Secure Auth",
                description: "OAuth 2.0 powered authentication with Google",
                icon: (
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )
              },
              {
                title: "App Router",
                description: "Built with Next.js App Router for modern routing",
                icon: (
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                )
              },
              {
                title: "User Profiles",
                description: "Access user data including profile images",
                icon: (
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition">
                <div className="flex items-center gap-3 mb-3">
                  {feature.icon}
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
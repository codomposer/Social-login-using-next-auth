"use client"
import { getServerSession } from "next-auth"
import { SessionProvider } from "next-auth/react"

const NextAuthProvider = ({ children }: { children: React.ReactNode }) => {
  // const session: any = getServerSession()
  return <SessionProvider>{children}</SessionProvider>
}

export default NextAuthProvider

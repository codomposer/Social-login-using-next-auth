"use client"
import React from "react"
import { useSession, signIn, signOut } from "next-auth/react"

const Component = () => {
  const { data: session } = useSession()

  const handleSignIn = () => {
    signIn("google")
  }

  if (session) {
    return (
      <div>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}

export default Component




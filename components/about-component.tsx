import Link from 'next/link'
import React from 'react'

export default function AboutComponent() {
  return (
    <>
      <h1>About Page</h1>
      <p className={"text-center my-2"}>
        <Link href="/">&larr; Go Back</Link>
      </p>
    </>
  )
}

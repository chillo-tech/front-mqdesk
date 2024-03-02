import Link from 'next/link'
import React from 'react'

function Action() {
  return (
    <div className="container flex items-center justify-center">
    <Link
      href="/sign-up"
      className="block w-full text-center md:w-fit bg-app-blue text-slate-50 font-bolder py-2 px-8 rounded-full inline-block"
    >
      Utiliser(Gratuitement) RabbitMQ
    </Link>
  </div>
  )
}

export default Action

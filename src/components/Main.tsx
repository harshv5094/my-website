import type React from 'react'

interface MainTypes {
  children: React.ReactNode
  className?: string
}

function Main({ children, className }: MainTypes) {
  return (
    <article
      className={`${className} flex-grow flex flex-row justify-center mx-4 md:mx-10 overflow-y-auto`}
    >
      {children}
    </article>
  )
}

export default Main

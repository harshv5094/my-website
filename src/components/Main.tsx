import type React from 'react'

interface MainTypes {
  children: React.ReactNode
  className?: string
  horizontal?: boolean
  vertical?: boolean
  alignmentFix: boolean
}

function Main({
  children,
  className,
  horizontal = false,
  vertical = false,
  alignmentFix = true
}: MainTypes) {
  if (horizontal === true && vertical === true) {
    alignmentFix = false
  }
  return (
    <article
      className={`${className} flex-grow flex flex-row ${horizontal ? 'justify-center' : ''} ${vertical ? 'items-center' : ''} ${alignmentFix ? 'pt-20' : ''}  mx-4 md:mx-10 overflow-y-auto`}
    >
      {children}
    </article>
  )
}

export default Main

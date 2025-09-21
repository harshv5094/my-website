import type React from 'react'

// Types for main screen
interface MainTypes {
  children: React.ReactNode
  className?: string
  horizontal?: boolean
  vertical?: boolean
  alignmentFix?: boolean
  paddingFix?: boolean
}

/* NOTE:
 * This is my main function,
 * which has different toggalable options,
 * mostly this options are related to design purpose
 */
function Main({
  children,
  className,
  horizontal = false,
  vertical = false,
  alignmentFix = true,
  paddingFix = true
}: MainTypes) {
  /* NOTE:
   * Here I'm both disabling alignment and padding fix
   * for my horizontal and vertical to be truly center
   */
  if (horizontal === true && vertical === true) {
    alignmentFix = false
    paddingFix = false
  }
  return (
    <article
      className={`
        ${className}
        flex-grow flex flex-row 
        mx-4 md:mx-10 overflow-y-auto
        ${horizontal ? 'justify-center' : ''}
        ${vertical ? 'items-center' : ''}
        ${alignmentFix ? 'pt-20' : ''}
        ${paddingFix ? 'md:px-20' : ''}
      `}
    >
      {children}
    </article>
  )
}

export default Main

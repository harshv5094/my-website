import type React from "react";

interface MainTypes {
  children: React.ReactNode;
  className?: string;
}

function Main({ children, className }: MainTypes) {
  return (
    <article className={`flex-grow flex flex-row justify-center ${className || ""}`}>
      {children}
    </article>
  )
}

export default Main

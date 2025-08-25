import { useEffect } from "react"
import Main from "../components/Main"

function About() {

  useEffect(() => {
    document.title = "Harsh Vyapari - About"
  }, [])

  return (
    <Main>
      <div className="text-2xl">
        <h1>About Page</h1>
      </div>
    </Main>
  )
}

export default About

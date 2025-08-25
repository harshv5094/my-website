import { useEffect } from 'react'
import Main from '../components/Main'

function Work() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - Work'
  }, [])

  return (
    <Main>
      <div className="text-2xl">
        <h1>Work Page</h1>
      </div>
    </Main>
  )
}

export default Work

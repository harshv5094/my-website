import { useEffect } from 'react'
import ProfilePic from '../assets/images/profile-pic.webp'
import Main from '../components/Main'

function Home() {
  useEffect(() => {
    document.title = 'Harsh Vyapari - Home'
  }, [])

  return (
    <Main className="items-center">
      <div className="flex flex-col items-center text-center">
        <section className="mt-5">
          <img
            src={ProfilePic}
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full"
          />
        </section>

        <section>
          <h1 className="font-serif font-bold text-2xl">Harsh Vyapari</h1>
          <h2 className="text-lg">Software Developer / Linux Enthusiast</h2>
        </section>
      </div>
    </Main>
  )
}

export default Home

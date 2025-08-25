import { useEffect } from 'react'
import ProfilePic from '../assets/images/profile-pic.webp'
import Main from '../components/Main'
import SocialIcons from '../components/SocialIcons'
import { FaBluesky, FaGithub, FaLinkedin } from 'react-icons/fa6'

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

        <section className="mt-2">
          <h1 className="font-serif font-bold text-2xl">Harsh Vyapari</h1>
          <h2 className="text-lg">Software Developer / Linux Enthusiast</h2>
        </section>

        <section className="gap-2">
          <SocialIcons url={'https://github.com/harshv5094'} Icon={FaGithub} />
          <SocialIcons
            url={'https://bsky.app/profile/harshv5094.bsky.social'}
            Icon={FaBluesky}
          />
          <SocialIcons
            url={'https://linkedin.com/in/harshv5094'}
            Icon={FaLinkedin}
          />
        </section>
      </div>
    </Main>
  )
}

export default Home

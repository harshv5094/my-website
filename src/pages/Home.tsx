import ProfilePic from '../assets/images/profile-pic.webp'
import Main from '../components/Main'
import SocialIcons from '../components/SocialIcons'
import { FaBluesky, FaGithub, FaLinkedin } from 'react-icons/fa6'
import SEO from '../components/SEO'
import { Link } from 'react-router'

function Home() {
  return (
    <>
      <SEO title="Harsh Vyapari - Home" />

      <Main horizontal={true} vertical={true}>
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
            <SocialIcons
              url={'https://github.com/harshv5094'}
              Icon={FaGithub}
            />
            <SocialIcons
              url={'https://bsky.app/profile/harshv5094.bsky.social'}
              Icon={FaBluesky}
            />
            <SocialIcons
              url={'https://linkedin.com/in/harshv5094'}
              Icon={FaLinkedin}
            />
          </section>
          <section className="mt-2">
            <Link
              to={'/about'}
              className="hover:underline text-blue-500 dark:text-blue-400"
            >
              Show More {'->'}
            </Link>
          </section>
        </div>
      </Main>
    </>
  )
}

export default Home

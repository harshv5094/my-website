import ProfilePic from '../assets/images/profile-pic.webp'
import Main from '../components/Main'
import SocialIcons from '../components/SocialIcons'
import { FaBluesky, FaGithub, FaLinkedin } from 'react-icons/fa6'
import SEO from '../components/SEO'
import { Link } from 'react-router'

function Home() {
  return (
    <>
      {/* Base SEO Component */}
      <SEO title="Harsh Vyapari - Home" />

      {/* Main Component */}
      <Main horizontal={true} vertical={true}>
        <div className="flex flex-col items-center text-center">
          {/* My profile picture */}
          <section>
            <img
              src={ProfilePic}
              alt="Harsh Vyapari's Profile Picture"
              width={200}
              height={200}
              className="rounded-full"
            />
          </section>

          {/* My name with my title */}
          <section className="mt-2">
            <h1 className="font-serif font-bold text-2xl">Harsh Vyapari</h1>
            <h2 className="text-lg">Software Developer / Linux Enthusiast</h2>
          </section>

          {/* My social media icons */}
          <section className="gap-2">
            <SocialIcons
              url={'https://github.com/harshv5094'}
              Icon={FaGithub}
              label={'GitHub'}
            />
            <SocialIcons
              url={'https://bsky.app/profile/harshv5094.bsky.social'}
              Icon={FaBluesky}
              label={'Bluesky'}
            />
            <SocialIcons
              url={'https://linkedin.com/in/harshv5094'}
              Icon={FaLinkedin}
              label={'Linkedin'}
            />
          </section>

          {/* Link to my about page */}
          <section className="mt-2">
            <Link
              to={'/about'}
              className="hover:underline text-accent dark:text-accent"
            >
              About me {'->'}
            </Link>
          </section>
        </div>
      </Main>
    </>
  )
}

export default Home

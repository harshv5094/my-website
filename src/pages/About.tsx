import { useEffect, useState } from 'react'
import Main from '../components/Main'
import SEO from '../components/SEO'

function About() {
  const [stats, setStats] = useState({ followers: 0, following: 0 })

  const fetchStats = async () => {
    try {
      const response = await fetch('https://api.github.com/users/harshv5094')
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json()
      setStats({ followers: data.followers, following: data.following })
    } catch (error) {
      console.error('Error fetching github stats: ', error)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [])

  return (
    <>
      <SEO title="Harsh Vyapari - About" />
      <Main horizontal={true}>
        <div className="gap-5 flex flex-col">
          {/* Short Introduction */}
          <section className="mt-2">
            <h2 className="text-2xl font-serif">Namaste 🙏</h2>
            <p className="font-sans mt-2">
              My name is Harsh Vyapari, a Software Developer from India.
              <br />
              I love exploring computers, technology, and everything related!
              <br />
              I'm passionate about Linux, FOSS, and customizing my workflow.
              <br />
              Always curious to learn, experiment, and build cool stuff.
            </p>
          </section>

          {/* My Stats */}
          <section>
            <h2 className="text-2xl font-serif">My Stats</h2>
            <div className="flex flex-col  gap-4 p-4">
              {/* GitHub Stats */}
              <img
                src="https://github-readme-stats.vercel.app/api?username=harshv5094&show_icons=true&rank_icon=github&theme=gruvbox"
                alt="Harsh's GitHub stats"
              />

              {/* Top Languages */}
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=harshv5094&layout=compact&theme=gruvbox"
                alt="Top Languages"
              />
            </div>
            <ul className="list-disc ml-5 mt-2">
              <li>
                GitHub Followers:{' '}
                <a
                  target="_blank"
                  className="hover:underline dark:hover:text-blue-400  hover:text-blue-500"
                  href="https://github.com/harshv5094?tab=followers"
                >
                  {stats.followers}
                </a>{' '}
              </li>
              <li>
                GitHub Following:{' '}
                <a
                  target="_blank"
                  className="hover:underline dark:hover:text-blue-400  hover:text-blue-500"
                  href="https://github.com/harshv5094?tab=following"
                >
                  {stats.following}
                </a>{' '}
              </li>
            </ul>
          </section>

          {/* Connect With Me */}
          <section>
            <h2 className="text-2xl font-serif">Connect with me</h2>
            <p className="mt-2">
              <section>
                <a
                  target="_blank"
                  href="https://github.com/harshv5094"
                  className="hover:underline dark:text-blue-400  text-blue-500"
                >
                  GitHub
                </a>{' '}
                :{' '}
                <a
                  target="_blank"
                  href="https://bsky.app/profile/harshv5094.bsky.social"
                  className="hover:underline dark:text-blue-400  text-blue-500"
                >
                  Bluesky
                </a>{' '}
                :{' '}
                <a
                  target="_blank"
                  href="https://linkedin.com/in/harshv5094"
                  className="hover:underline dark:text-blue-400  text-blue-500"
                >
                  Linkedin
                </a>{' '}
              </section>
              <section className="mt-2">
                Git RSA Sign Public Key :{'  '}
                <a
                  target="_blank"
                  href="https://raw.githubusercontent.com/harshv5094/harshv5094/refs/heads/main/git-sign-public.asc"
                >
                  <code className="text-blue-500 dark:text-blue-400 hover:underline">
                    525F AC3D 751C F169 E31C 0E43 A897 C10C 48C4 E722
                  </code>
                </a>
              </section>
            </p>
          </section>
        </div>
      </Main>
    </>
  )
}

export default About

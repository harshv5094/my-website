import { Link } from 'react-router'
import Main from '../components/Main'
import SEO from '../components/SEO'

function NotFound() {
  return (
    <>
      {/* Base SEO Component */}
      <SEO title="Harsh Vyapari - 404" />

      {/* Main Component */}
      <Main horizontal={true} vertical={true}>
        <section className="text-center">
          <p className="text-2xl">404 - Not Found</p>
          <br />
          <div>
            <Link
              to={`/`}
              className="hover:underline text-accent dark:text-accent"
            >
              Go To Home
            </Link>
          </div>
        </section>
      </Main>
    </>
  )
}

export default NotFound

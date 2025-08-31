import { Link } from 'react-router'
import Main from '../components/Main'
import SEO from '../components/SEO'

function NotFound() {
  return (
    <>
      <SEO title="Harsh Vyapari - 404" />
      <Main horizontal={true} vertical={true}>
        <section className="text-center">
          <p className="text-2xl">404 - Not Found</p>
          <br />
          <div>
            <Link
              to="/"
              className="hover:underline text-blue-500 dark:text-blue-400"
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

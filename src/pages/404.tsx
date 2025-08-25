import { Link } from "react-router"
import Main from "../components/Main"

function NotFound() {
  return (
    <Main className="items-center">
      <section className="text-center">
        <p className="text-2xl">
          404 - Not Found
        </p>
        <br />
        <div>
          <Link to="/" className="hover:underline">
            Go To Home
          </Link>
        </div>
      </section>
    </Main>
  )
}

export default NotFound

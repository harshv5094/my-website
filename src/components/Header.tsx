import { Link } from "react-router"

function Header() {
  return (
    <header className="px-2 py-4">
      <nav className="flex justify-center space-x-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/work" className="hover:underline">
          Work
        </Link>
      </nav>
    </header>
  )
}

export default Header

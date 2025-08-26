import { useState } from 'react'
import { Link } from 'react-router'
import { useTheme } from '../context/themeToggle'
import { LuSun, LuMoon, LuMenu, LuX } from 'react-icons/lu'

function Header() {
  const [open, setOpen] = useState(false)

  const { theme, toggleTheme } = useTheme()

  return (
    <header className="px-4 py-4 border-b mb-2 z-2 relative">
      <nav className="flex justify-between items-center md:px-20">
        {/* Left: Name */}
        <section>
          <Link to="/" className="text-xl font-serif font-bold hover:underline">
            Harsh Vyapari
          </Link>
        </section>

        {/* Right: Links (desktop) */}
        <section className="flex items-center">
          <div className="hidden md:flex space-x-4 px-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/work" className="hover:underline">
              Work
            </Link>
          </div>

          {/* Theme Toggle Button*/}
          <div>
            <button
              onClick={toggleTheme}
              aria-label="theme-toggle-button"
              className=" p-2 mx-2 rounded-lg border bg-gruvbox-bg text-gruvbox-fg 
                          hover:bg-gruvbox-yellow hover:text-gruvbox-bg
                          dark:hover:bg-gruvbox-aqua dark:hover:text-gruvbox-bg"
            >
              {theme === 'light' ? (
                <LuMoon className="h-5 w-5" />
              ) : (
                <LuSun className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="dropdown-menu"
              className=" p-2 mx-2 rounded-lg border bg-gruvbox-bg text-gruvbox-fg 
                          hover:bg-gruvbox-yellow hover:text-gruvbox-bg
                          dark:hover:bg-gruvbox-aqua dark:hover:text-gruvbox-bg"
            >
              {open ? (
                <LuX className="h-5 w-5" />
              ) : (
                <LuMenu className="h-5 w-5" />
              )}
            </button>
          </div>
        </section>
      </nav>
      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden mt-2 flex flex-col space-y-2 border-t pt-2">
          <Link
            to="/"
            className="hover:underline"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:underline"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="/work"
            className="hover:underline"
            onClick={() => setOpen(false)}
          >
            Work
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header

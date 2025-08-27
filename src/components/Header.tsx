import { useState } from 'react'
import { Link } from 'react-router'
import { useTheme } from '../context/themeToggle'
import { LuSun, LuMoon, LuMenu, LuX } from 'react-icons/lu'
import { motion, AnimatePresence } from 'framer-motion'

function Header() {
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="px-4 py-4 z-20 border-b-2 backdrop-blur-2xl fixed w-full">
      <nav className="flex justify-between items-center md:px-20">
        {/* Left: Name */}
        <section>
          <Link
            to="/"
            className="text-xl font-serif font-semibold hover:underline"
          >
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

          {/* Theme Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.85, rotate: 90 }}
            onClick={toggleTheme}
            aria-label="theme-toggle-button"
            className="p-2 mx-2 rounded-lg border-2 bg-gruvbox-bg text-gruvbox-fg 
                        hover:bg-gruvbox-yellow hover:text-gruvbox-bg
                        dark:hover:bg-gruvbox-aqua dark:hover:text-gruvbox-bg"
          >
            {theme === 'light' ? (
              <LuMoon className="h-5 w-5" />
            ) : (
              <LuSun className="h-5 w-5" />
            )}
          </motion.button>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.85, rotate: 90 }}
            onClick={() => setOpen(!open)}
            aria-label="dropdown-menu"
            className="md:hidden p-2 mx-2 rounded-lg border-2 bg-gruvbox-bg text-gruvbox-fg 
                        hover:bg-gruvbox-yellow hover:text-gruvbox-bg
                        dark:hover:bg-gruvbox-aqua dark:hover:text-gruvbox-bg"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={open ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {open ? (
                  <LuX className="h-5 w-5" />
                ) : (
                  <LuMenu className="h-5 w-5" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </section>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-2 flex flex-col space-y-2 border-t pt-2"
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header

import Main from "../components/Main"
import { useTheme } from "../context/themeToggle"

function Home() {
  const { theme, toggleTheme } = useTheme()
  return (
    <Main>
      <div className="text-2xl">
        <h1>Home Page</h1>
        <button onClick={toggleTheme}>
          <p>Change to: {theme}</p>
        </button>
        <p className="font-sans">IBM Plex Sans text</p>
        <p className="font-serif">IBM Plex Serif text</p>
        <p className="font-mono">JetBrains Mono text</p>
      </div>
    </Main>
  )
}

export default Home

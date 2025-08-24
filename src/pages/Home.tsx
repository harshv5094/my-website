import { useTheme } from "../context/themeToggle"

function Home() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className="text-2xl">
      <h1>Home Page</h1>
      <button onClick={toggleTheme}>
        <p>Change to: {theme}</p>
      </button>
      <p className="font-sans">IBM Plex Sans text</p>
      <p className="font-serif">IBM Plex Serif text</p>
      <p className="font-mono">JetBrains Mono text</p>
    </div>
  )
}

export default Home

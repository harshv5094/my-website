import { useTheme } from "../context/themeToggle"

function Home() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className="text-2xl">
      <h1>Home Page</h1>
      <button onClick={toggleTheme}>
        <p>Change to: {theme}</p>
      </button>
    </div>
  )
}

export default Home

import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Work from "./pages/Work"
import { ThemeProvider } from "./context/themeToggle"

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

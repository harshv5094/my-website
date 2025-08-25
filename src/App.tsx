import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import { ThemeProvider } from './context/themeToggle'
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './pages/404'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

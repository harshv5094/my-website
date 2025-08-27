/* Package Components */
import { BrowserRouter, Routes, Route } from 'react-router'
import { ThemeProvider } from './context/themeToggle'
import { HelmetProvider } from 'react-helmet-async'
/* User Components */
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
/* Pages */
import About from './pages/About'
import Work from './pages/Work'
import NotFound from './pages/404'

function App() {
  const helmetContext = {}
  return (
    <HelmetProvider context={helmetContext}>
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
    </HelmetProvider>
  )
}

export default App

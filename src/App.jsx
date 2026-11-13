
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Home/nav/Navbar'
import HomePage from './components/Home/HomePage'
import BlogPage from './components/Home/blog/BlogPage'

function App() {
  return (
    <BrowserRouter>
      <div className="site-background min-h-screen text-text">

        <Navbar />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}

export default App

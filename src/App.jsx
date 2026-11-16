import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'

import Navbar from './components/Home/nav/Navbar'
import HomePage from './components/Home/HomePage'
import BlogPage from './components/Home/blog/BlogPage'

import DocsLayout from './components/Docs/DocsLayout'
import DocsPage from './components/Docs/DocsPage'

function AppContent() {
  const location = useLocation()

  const isDocsPage =
    location.pathname.startsWith('/docs') ||
    location.pathname.startsWith('/guides')

  return (
    <div className="site-background min-h-screen text-text">
      {!isDocsPage && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />

        <Route element={<DocsLayout />}>
          <Route
            path="/docs"
            element={<Navigate to="/docs/introduction" replace />}
          />
          <Route path="/docs/:slug" element={<DocsPage />} />
          <Route path="/guides/:slug" element={<DocsPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App

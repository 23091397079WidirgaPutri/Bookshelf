import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import BooksPage from './pages/BooksPage'
import BookDetailPage from './pages/BookDetailPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Redirect */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Pages */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/books" element={<BooksPage />} />

        {/* Dynamic */}
        <Route path="/books/:bookId" element={<BookDetailPage />} />

        {/* Static */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* 404 */}
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
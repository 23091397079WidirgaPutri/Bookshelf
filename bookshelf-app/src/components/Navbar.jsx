import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const isActive = (path) => location.pathname.startsWith(path)

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        📚 BookShelf
      </div>

      <div style={styles.menu}>
        <Link
          to="/dashboard"
          style={isActive('/dashboard') ? styles.activeLink : styles.link}
        >
          Dashboard
        </Link>

        <Link
          to="/books"
          style={isActive('/books') ? styles.activeLink : styles.link}
        >
          Books
        </Link>

        <Link
          to="/about"
          style={isActive('/about') ? styles.activeLink : styles.link}
        >
          About
        </Link>

        <Link
          to="/contact"
          style={isActive('/contact') ? styles.activeLink : styles.link}
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.9rem 2rem',
    background: '#ffffff',
    borderBottom: '1px solid #eee',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    fontFamily: 'sans-serif',
  },
  logo: {
    fontWeight: '700',
    fontSize: '18px',
    color: '#185FA5',
  },
  menu: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    textDecoration: 'none',
    color: '#555',
    fontSize: '14px',
    fontWeight: '500',
    transition: '0.2s',
  },
  activeLink: {
    textDecoration: 'none',
    color: '#185FA5',
    fontSize: '14px',
    fontWeight: '600',
    borderBottom: '2px solid #185FA5',
    paddingBottom: '2px',
  },
}

export default Navbar
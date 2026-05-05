import { Link, useNavigate } from 'react-router-dom'

function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>

        {/* Ilustrasi SVG */}
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
          style={styles.illustration}
        >
          {/* Buku */}
          <rect x="20" y="15" width="58" height="76" rx="6" fill="#f5f5f5" stroke="#d1d5db" strokeWidth="1" />
          <rect x="28" y="25" width="38" height="4" rx="2" fill="#d1d5db" />
          <rect x="28" y="34" width="30" height="4" rx="2" fill="#d1d5db" />
          <rect x="28" y="43" width="34" height="4" rx="2" fill="#d1d5db" />
          <rect x="28" y="52" width="20" height="4" rx="2" fill="#d1d5db" />
          {/* Lingkaran X */}
          <circle cx="80" cy="75" r="26" fill="#fff" stroke="#d1d5db" strokeWidth="1" />
          <line x1="70" y1="65" x2="90" y2="85" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="90" y1="65" x2="70" y2="85" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" />
        </svg>

        {/* Badge */}
        <span style={styles.badge}>Error 404</span>

        {/* Judul & Deskripsi */}
        <h1 style={styles.title}>Halaman tidak ditemukan</h1>
        <p style={styles.desc}>
          Sepertinya halaman yang kamu cari tidak ada atau sudah dipindahkan.
          Coba kembali ke daftar buku.
        </p>

        {/* Tombol Navigasi */}
        <div style={styles.btnGroup}>
          <Link to="/books" style={styles.btnPrimary}>
            Ke Daftar Buku
          </Link>
          <button onClick={() => navigate(-1)} style={styles.btnSecondary}>
            ← Kembali
          </button>
        </div>

      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f9fafb',
    fontFamily: 'sans-serif',
    padding: '2rem',
  },
  container: {
    textAlign: 'center',
    maxWidth: '380px',
  },
  illustration: {
    marginBottom: '1.5rem',
  },
  badge: {
    display: 'inline-block',
    fontSize: '11px',
    fontWeight: '600',
    padding: '3px 10px',
    borderRadius: '99px',
    background: '#FEE2E2',
    color: '#B91C1C',
    marginBottom: '1rem',
    letterSpacing: '0.04em',
  },
  title: {
    fontSize: '22px',
    fontWeight: '600',
    margin: '0 0 0.5rem',
    color: '#111',
  },
  desc: {
    fontSize: '14px',
    color: '#6b7280',
    lineHeight: '1.7',
    margin: '0 0 2rem',
  },
  btnGroup: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  btnPrimary: {
    padding: '8px 20px',
    borderRadius: '8px',
    background: '#185FA5',
    color: '#fff',
    fontWeight: '500',
    fontSize: '13px',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  btnSecondary: {
    padding: '8px 20px',
    borderRadius: '8px',
    background: 'transparent',
    color: '#6b7280',
    fontSize: '13px',
    border: '1px solid #e5e7eb',
    cursor: 'pointer',
  },
}

export default NotFoundPage
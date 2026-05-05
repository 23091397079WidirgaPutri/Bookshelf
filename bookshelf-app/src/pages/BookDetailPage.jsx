import { useParams, Navigate, Link } from 'react-router-dom'

// DATA BUKU
const allBooks = [
  {
    id: 'book-1',
    title: 'Laskar Pelangi',
    author: 'Andrea Hirata',
    genre: 'Fiksi',
    year: 2005,
    pages: 529,
    rating: 4.8,
    read: true,
    description:
      'Kisah inspiratif tentang perjuangan anak-anak di Belitung dalam meraih pendidikan di tengah keterbatasan.',
  },
  {
    id: 'book-2',
    title: 'Bumi Manusia',
    author: 'Pramoedya Ananta Toer',
    genre: 'Sejarah',
    year: 1980,
    pages: 535,
    rating: 4.9,
    read: false,
    description:
      'Novel yang menggambarkan kehidupan di masa kolonial Belanda melalui sudut pandang Minke.',
  },
  {
    id: 'book-3',
    title: 'Negeri 5 Menara',
    author: 'Ahmad Fuadi',
    genre: 'Motivasi',
    year: 2009,
    pages: 423,
    rating: 4.7,
    read: true,
    description:
      'Cerita tentang perjuangan santri di pesantren dengan semangat Man Jadda Wajada.',
  },
  {
    id: 'book-4',
    title: 'Dilan 1990',
    author: 'Pidi Baiq',
    genre: 'Romantis',
    year: 2014,
    pages: 332,
    rating: 4.5,
    read: false,
    description:
      'Kisah cinta remaja antara Dilan dan Milea yang penuh dengan dialog unik.',
  },
  {
    id: 'book-5',
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Pengembangan Diri',
    year: 2018,
    pages: 320,
    rating: 4.9,
    read: true,
    description:
      'Panduan membangun kebiasaan baik dan menghilangkan kebiasaan buruk secara efektif.',
  },
]

function BookDetailPage() {
  const { bookId } = useParams()
  const book = allBooks.find((b) => b.id === bookId)

  // ✅ Redirect ke 404 jika tidak ditemukan
  if (!book) {
    return <Navigate to="/not-found" replace />
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* TOP */}
        <div style={styles.topRow}>
          <span style={styles.badge}>{book.genre}</span>

          <span
            style={{
              ...styles.status,
              background: book.read ? '#e6f7ee' : '#fff4e5',
              color: book.read ? '#1a7f4b' : '#b26a00',
            }}
          >
            {book.read ? '✅ Sudah dibaca' : '📖 Belum dibaca'}
          </span>
        </div>

        {/* TITLE */}
        <h1 style={styles.title}>{book.title}</h1>
        <p style={styles.author}>oleh {book.author}</p>

        {/* INFO */}
        <div style={styles.infoGrid}>
          <div style={styles.infoCard}>
            <p style={styles.label}>Tahun</p>
            <p style={styles.value}>{book.year}</p>
          </div>

          <div style={styles.infoCard}>
            <p style={styles.label}>Halaman</p>
            <p style={styles.value}>{book.pages}</p>
          </div>

          <div style={styles.infoCard}>
            <p style={styles.label}>Rating</p>
            <p style={styles.value}>⭐ {book.rating}</p>
          </div>
        </div>

        {/* DESC */}
        <div style={styles.descBox}>
          <h3>Deskripsi</h3>
          <p style={styles.desc}>{book.description}</p>
        </div>

        {/* BACK */}
        <Link to="/books" style={styles.link}>
          ← Kembali ke daftar buku
        </Link>
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    background: '#f4f7fb',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1.5rem',
  },
  container: {
    maxWidth: '700px',
    width: '100%',
    background: '#fff',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  },
  topRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  },
  badge: {
    fontSize: '12px',
    padding: '4px 12px',
    borderRadius: '999px',
    background: '#E6F1FB',
    color: '#185FA5',
  },
  status: {
    fontSize: '12px',
    padding: '4px 12px',
    borderRadius: '999px',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
  },
  author: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '1.5rem',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    marginBottom: '1.5rem',
  },
  infoCard: {
    background: '#fafafa',
    padding: '10px',
    borderRadius: '10px',
    textAlign: 'center',
    border: '1px solid #eee',
  },
  label: {
    fontSize: '12px',
    color: '#888',
  },
  value: {
    fontSize: '15px',
    fontWeight: '600',
  },
  descBox: {
    marginBottom: '1.5rem',
  },
  desc: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.6',
  },
  link: {
    textDecoration: 'none',
    color: '#185FA5',
    fontWeight: '500',
  },
}

export default BookDetailPage
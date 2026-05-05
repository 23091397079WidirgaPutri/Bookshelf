import { useState } from 'react'
import { Link } from 'react-router-dom'

const initialBooks = [
  {
    id: 'book-1',
    title: 'Laskar Pelangi',
    author: 'Andrea Hirata',
    description: 'Kisah inspiratif anak Belitung',
    year: 2005,
    pages: 529,
    rating: 4.8,
    read: false,
  },
  {
    id: 'book-2',
    title: 'Bumi Manusia',
    author: 'Pramoedya Ananta Toer',
    description: 'Cerita masa kolonial',
    year: 1980,
    pages: 535,
    rating: 4.9,
    read: false,
  },
  {
    id: 'book-3',
    title: 'Negeri 5 Menara',
    author: 'Ahmad Fuadi',
    description: 'Perjuangan santri',
    year: 2009,
    pages: 423,
    rating: 4.7,
    read: false,
  },
  {
    id: 'book-4',
    title: 'Dilan 1990',
    author: 'Pidi Baiq',
    description: 'Kisah cinta remaja',
    year: 2014,
    pages: 332,
    rating: 4.5,
    read: false,
  },
  {
    id: 'book-5',
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'Membangun kebiasaan baik',
    year: 2018,
    pages: 320,
    rating: 4.9,
    read: false,
  },
]

function BooksPage() {
  const [books, setBooks] = useState(initialBooks)

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [year, setYear] = useState('')
  const [pages, setPages] = useState('')
  const [rating, setRating] = useState('')

  const addBook = () => {
    if (!title.trim() || !author.trim()) {
      alert('Judul dan penulis harus diisi!')
      return
    }

    const newBook = {
      id: 'book-' + Date.now(),
      title,
      author,
      description,
      year: parseInt(year),
      pages: parseInt(pages),
      rating: parseFloat(rating),
      read: false,
    }

    setBooks(prev => [...prev, newBook])

    setTitle('')
    setAuthor('')
    setDescription('')
    setYear('')
    setPages('')
    setRating('')
  }

  const toggleRead = (id) => {
    setBooks(prev =>
      prev.map(b =>
        b.id === id ? { ...b, read: !b.read } : b
      )
    )
  }

  const deleteBook = (id) => {
    setBooks(prev => prev.filter(b => b.id !== id))
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>📚 BookShelf</h1>

        {/* FORM */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            addBook()
          }}
          style={styles.form}
        >
          <div style={styles.grid}>
            <input style={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Judul Buku" />
            <input style={styles.input} value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Penulis" />

            <input style={styles.input} value={year} onChange={(e) => setYear(e.target.value)} placeholder="Tahun Terbit" type="number" />
            <input style={styles.input} value={pages} onChange={(e) => setPages(e.target.value)} placeholder="Jumlah Halaman" type="number" />

            <input style={styles.input} value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating (0-5)" type="number" step="0.1" />
            <div></div>
          </div>

          <textarea
            style={styles.textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Deskripsi buku"
          />

          <button type="submit" style={styles.addBtn}>
            + Tambah Buku
          </button>
        </form>

        {/* LIST (MINIMAL) */}
        <div style={styles.list}>
          {books.map((book) => (
            <div key={book.id} style={styles.card}>
              
              {/* KIRI */}
              <div>
                <Link to={`/books/${book.id}`} style={styles.bookTitle}>
                  {book.title}
                </Link>
                <p style={styles.author}>{book.author}</p>
              </div>

              {/* KANAN */}
              <div style={styles.right}>
                <span
                  style={{
                    ...styles.badge,
                    background: book.read ? '#e6f7ee' : '#fff4e5',
                    color: book.read ? '#1a7f4b' : '#b26a00',
                  }}
                >
                  {book.read ? '✅ Sudah dibaca' : '📖 Belum dibaca'}
                </span>

                <div style={styles.actions}>
                  <button
                    style={styles.btn}
                    onClick={() => toggleRead(book.id)}
                  >
                    {book.read ? 'Belum dibaca' : 'Sudah dibaca'}
                  </button>

                  <button
                    style={styles.deleteBtn}
                    onClick={() => deleteBook(book.id)}
                  >
                    🗑️
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    background: '#f4f7fb',
    padding: '2rem',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    background: '#fff',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  },
  title: {
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginBottom: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
  },
  input: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ddd',
  },
  textarea: {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    minHeight: '80px',
    resize: 'none',
  },
  addBtn: {
    padding: '10px',
    background: '#185FA5',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #eee',
    borderRadius: '12px',
    padding: '1rem',
    background: '#fafafa',
  },
  bookTitle: {
    fontWeight: '600',
    fontSize: '16px',
    textDecoration: 'none',
    color: '#185FA5',
  },
  author: {
    fontSize: '13px',
    color: '#777',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '6px',
  },
  badge: {
    fontSize: '12px',
    padding: '4px 10px',
    borderRadius: '999px',
  },
  actions: {
    display: 'flex',
    gap: '6px',
  },
  btn: {
    padding: '6px 10px',
    borderRadius: '6px',
    border: 'none',
    background: '#dbeafe',
    cursor: 'pointer',
    fontSize: '12px',
  },
  deleteBtn: {
    padding: '6px 10px',
    borderRadius: '6px',
    border: 'none',
    background: '#ffe2e2',
    color: '#b91c1c',
    cursor: 'pointer',
    fontSize: '12px',
  },
}

export default BooksPage
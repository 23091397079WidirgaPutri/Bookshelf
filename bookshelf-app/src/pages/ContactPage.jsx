import { Link } from 'react-router-dom'

const contacts = [
  { icon: '✉️', label: 'Email', value: 'bookshelf@email.com' },
  { icon: '📸', label: 'Instagram', value: '@bookshelf_app' },
  { icon: '📍', label: 'Lokasi', value: 'Surabaya, Jawa Timur' },
]

function ContactPage() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <span style={styles.badge}>Kontak</span>
        <h1 style={styles.h1}>Hubungi Kami</h1>
        <p style={styles.lead}>
          Punya pertanyaan atau saran? Hubungi kami melalui kontak berikut.
        </p>

        <div style={styles.contactList}>
          {contacts.map((c) => (
            <div key={c.label} style={styles.card}>
              <div style={styles.iconBox}>{c.icon}</div>
              <p style={styles.label}>{c.label}</p>
              <p style={styles.value}>{c.value}</p>
            </div>
          ))}
        </div>

        <Link to="/books" style={styles.link}>
          ← Kembali ke Daftar Buku
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
  },

  container: {
    width: '100%',
    maxWidth: '800px',
    background: '#ffffff',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    textAlign: 'center',
  },

  badge: {
    fontSize: '11px',
    fontWeight: '600',
    padding: '4px 12px',
    borderRadius: '999px',
    background: '#E6F1FB',
    color: '#185FA5',
    marginBottom: '0.75rem',
  },

  h1: {
    fontSize: '30px',
    fontWeight: '700',
    marginBottom: '0.5rem',
  },

  lead: {
    fontSize: '15px',
    color: '#666',
    marginBottom: '2rem',
  },

  // 🔥 UBAH DI SINI
  contactList: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    marginBottom: '2rem',
    flexWrap: 'wrap', // biar responsif
  },

  // 🔥 CARD PERSEGI
  card: {
    flex: '1',
    minWidth: '180px',
    maxWidth: '220px',
    height: '160px',
    background: '#fafafa',
    border: '1px solid #eee',
    borderRadius: '14px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    transition: '0.2s',
  },

  iconBox: {
    width: '50px',
    height: '50px',
    borderRadius: '12px',
    background: '#eaf3ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    marginBottom: '6px',
  },

  label: {
    fontSize: '12px',
    color: '#999',
  },

  value: {
    fontSize: '14px',
    fontWeight: '600',
    textAlign: 'center',
  },

  link: {
    fontSize: '14px',
    color: '#185FA5',
    textDecoration: 'none',
    fontWeight: '500',
  },
}

export default ContactPage
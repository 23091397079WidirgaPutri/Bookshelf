import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>

        <h1 style={styles.title}>📘 About BookShelf</h1>

        {/* HERO BOX */}
        <div style={styles.heroBox}>
          <p style={styles.heroText}>
            Tempat sederhana untuk mengelola buku, mencatat perjalanan membaca,
            dan menikmati pengalaman membaca yang lebih teratur.
          </p>
        </div>

        {/* SECTION */}
        <div style={styles.section}>
          <h2 style={styles.subtitle}>📌 Kenapa BookShelf?</h2>
          <div style={styles.row}>
            <div style={styles.box}>📚 Koleksi buku lebih terorganisir</div>
            <div style={styles.box}>📝 Tidak perlu catatan manual</div>
            <div style={styles.box}>⏳ Akses kapan saja</div>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.subtitle}>⚡ Yang Bisa Kamu Lakukan</h2>
          <div style={styles.row}>
            <div style={styles.box}>➕ Menambahkan buku baru</div>
            <div style={styles.box}>✅ Menandai sudah dibaca</div>
            <div style={styles.box}>🔍 Melihat detail lengkap buku</div>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.subtitle}>🎯 Tujuan</h2>
          <div style={styles.goalBox}>
            Membantu kamu membangun kebiasaan membaca yang lebih konsisten
            dengan cara yang sederhana dan praktis.
          </div>
        </div>

      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #eef2ff, #f8fafc)',
    padding: '2rem',
  },

  container: {
    maxWidth: '900px',
    margin: '0 auto',
    background: '#fff',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
  },

  title: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontSize: '28px',
    fontWeight: '700',
  },

  heroBox: {
    background: '#e6f0ff',
    padding: '1.2rem',
    borderRadius: '12px',
    marginBottom: '2rem',
    textAlign: 'center',
  },

  heroText: {
    fontSize: '15px',
    color: '#185FA5',
    fontWeight: '500',
  },

  section: {
    marginBottom: '2rem',
  },

  subtitle: {
    marginBottom: '1rem',
    fontSize: '18px',
  },

  row: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  },

  box: {
    flex: '1',
    minWidth: '200px',
    background: '#f5f7fa',
    padding: '12px',
    borderRadius: '10px',
    fontSize: '14px',
    textAlign: 'center',
  },

  goalBox: {
    background: '#f0fdf4',
    padding: '1rem',
    borderRadius: '10px',
    fontSize: '14px',
    textAlign: 'center',
    color: '#166534',
  },
}

export default AboutPage
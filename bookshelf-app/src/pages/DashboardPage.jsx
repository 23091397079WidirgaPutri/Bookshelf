import { Link } from "react-router-dom";

function DashboardPage() {
  return (
    <div style={styles.container}>
      
      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.title}>📚 BookShelf</h1>

        <p style={styles.subtitle}>
          BookShelf adalah aplikasi web untuk mencatat dan mengelola koleksi buku pribadimu.
          Tandai buku yang sudah dibaca, tambahkan buku baru, dan lihat detail setiap buku kapan saja.
        </p>

        <Link to="/books" style={styles.button}>
          Jelajahi Koleksi Buku →
        </Link>
      </div>

      {/* DECORATIVE / QUOTE */}
      <div style={styles.quoteBox}>
        <p style={styles.quote}>
          “Membaca adalah jendela dunia. Semakin banyak buku yang kamu baca,
          semakin luas wawasanmu.”
        </p>
      </div>

    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "2rem",
    fontFamily: "sans-serif",
    textAlign: "center",
    background: "linear-gradient(135deg, #eef2ff, #f8fafc)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  hero: {
    marginBottom: "2rem",
  },

  title: {
    fontSize: "44px",
    fontWeight: "700",
    marginBottom: "1rem",
    color: "#1e293b",
  },

  subtitle: {
    maxWidth: "600px",
    margin: "0 auto 2rem",
    color: "#475569",
    lineHeight: "1.7",
    fontSize: "16px",
  },

  button: {
    textDecoration: "none",
    background: "linear-gradient(135deg, #3b82f6, #6366f1)",
    color: "#fff",
    padding: "14px 26px",
    borderRadius: "12px",
    fontWeight: "500",
    boxShadow: "0 6px 18px rgba(99,102,241,0.3)",
    display: "inline-block",
    transition: "0.3s",
  },

  quoteBox: {
    marginTop: "2rem",
    maxWidth: "500px",
    marginInline: "auto",
    padding: "1.5rem",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
  },

  quote: {
    fontStyle: "italic",
    color: "#334155",
    lineHeight: "1.6",
  },
};

export default DashboardPage;
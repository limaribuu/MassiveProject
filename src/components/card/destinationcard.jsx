import React from 'react';

// Icon Bookmark (seperti di gambar)
const BookmarkIcon = ({ filled }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill={filled ? "#f97316" : "#A9A9A9"}
    style={{ width: '24px', height: '24px' }}
  >
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);

// Icon Bintang
const StarIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="#fbbf24"
    style={{ width: '20px', height: '20px' }}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export const DestinationCard = ({ image, title, detail, rating, isFavorite = false }) => {
  const [favorite, setFavorite] = React.useState(isFavorite);

  const styles = {
    card: {
      position: 'relative',
      width: '100%',
      maxWidth: '450px',
      height: '550px',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
      backgroundColor: '#000'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 100%)'
    },
    bookmarkButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      backgroundColor: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.2s'
    },
    content: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '30px',
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    },
    title: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: '28px',
      lineHeight: '1.2',
      margin: 0,
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
    },
    detail: {
      color: 'white',
      fontSize: '15px',
      lineHeight: '1.5',
      margin: 0,
      opacity: 0.95,
      textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
    },
    bottomSection: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '10px'
    },
    button: {
      backgroundColor: '#f97316',
      color: 'white',
      fontSize: '16px',
      fontWeight: 'bold',
      padding: '14px 30px',
      borderRadius: '30px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(249, 115, 22, 0.4)',
      transition: 'all 0.3s ease'
    },
    ratingContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '10px 16px',
      borderRadius: '25px',
      backdropFilter: 'blur(10px)'
    },
    ratingText: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: 'white',
      margin: 0
    }
  };

  return (
    <div style={styles.card}>
      <img 
        src={image} 
        alt={title}
        style={styles.image}
      />
      <div style={styles.overlay}></div>
      
      {/* Bookmark Button */}
      <button 
        onClick={() => setFavorite(!favorite)}
        style={styles.bookmarkButton}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <BookmarkIcon filled={favorite} />
      </button>

      {/* Content */}
      <div style={styles.content}>
        <h2 style={styles.title}>{title}</h2>
        <p style={styles.detail}>{detail}</p>

        <div style={styles.bottomSection}>
          <button 
            style={styles.button}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ea580c';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(249, 115, 22, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f97316';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(249, 115, 22, 0.4)';
            }}
          >
            Lihat Detail
          </button>

          <div style={styles.ratingContainer}>
            <StarIcon />
            <span style={styles.ratingText}>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
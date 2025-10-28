import React from 'react';
import { DestinationCard } from './components/card/destinationcard';

function Appdes() {
  const destination = {
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=1000&fit=crop",
    title: "Museum Sultan Mahmud Badaruddin II",
    detail: "Menampilkan koleksi sejarah Kesultanan Palembang dan peninggalan budaya Melayu. Cocok untuk mengenal lebih dekat warisan kota Palembang.",
    rating: 4.0,
    isFavorite: true
  };

  const containerStyle = {
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px'
  };

  return (
    <div style={containerStyle}>
      <DestinationCard
        image={destination.image}
        title={destination.title}
        detail={destination.detail}
        rating={destination.rating}
        isFavorite={destination.isFavorite}
      />
    </div>
  );
}

export default Appdes;
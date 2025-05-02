import React from 'react';
import '../styles/BackgroundGrid.scss';

const catImages = [
  '/bg/1.jpg',
  '/bg/2.jpg',
  '/bg/3.jpg',
  '/bg/4.jpg',
  '/bg/5.jpg',
  '/bg/6.jpg',
  '/bg/7.jpg',
  '/bg/8.jpg',
  '/bg/9.jpg',
  '/bg/10.jpg',
];

// Shuffle to avoid repeating pattern
const shuffle = (array: string[]) => [...array].sort(() => 0.5 - Math.random());

const BackgroundGrid: React.FC = () => {
  const extendedImages = shuffle([...catImages, ...catImages]);

  return (
    <div className="background-grid">
      {extendedImages.map((src, index) => (
        <div className="bg-image-container" key={`cat-${index}`}>
          <img
            src={src}
            alt=""
            className="bg-image"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default BackgroundGrid;

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./ImageCarousel.module.css"; // Archivo de estilos CSS

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambiar cada 3 segundos

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className={styles.carouselContainer}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.carouselItem} ${
            index === currentIndex ? styles.active : ""
          }`}
        >
          <Image
            src={image.src}
            alt={`Image ${index}`}
            fill
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;


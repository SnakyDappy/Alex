import React, { useState } from "react";
import Photo1 from "../photos/photo (2).jpeg";
import Photo2 from "../photos/photo (3).jpeg";
import Photo3 from "../photos/photo (4).jpeg";
import Photo4 from "../photos/photo (5).jpeg";
import Photo5 from "../photos/photo (6).jpeg";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slides = [Photo1, Photo2, Photo3, Photo4, Photo5];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      {/* Photo Slider */}
      <section className="slider">
        <button className="prev-button" onClick={prevSlide}>‹</button>

        {slides.map((src, index) => {
          let className = "";
          if (index === currentIndex) {
            className = "center";
          } else if (index === (currentIndex + 1) % slides.length) {
            className = "right";
          } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
            className = "left";
          } else {
            className = "hidden";
          }

          return (
            <img
              key={index}
              src={src}
              alt={`Cocktail Cake Slider ${index + 1}`}
              className={className}
              onClick={() => index === currentIndex && setIsModalOpen(true)}
            />
          );
        })}

        <button className="next-button" onClick={nextSlide}>›</button>
      </section>

      {/* Modal for Enlarged Image */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content">
            <img src={slides[currentIndex]} alt="Enlarged Cocktail Cake" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Slider;

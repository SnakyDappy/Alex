import React, { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    photo: "https://avatars.githubusercontent.com/u/51878773?v=4",
    rating: 5,
    text: "Ceva ceva ceva",
  },
  {
    id: 2,
    name: "Michael Smith",
    photo: "https://avatars.githubusercontent.com/u/51878773?v=4",
    rating: 4,
    text: "Ceva ceva ceva",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    photo: "https://avatars.githubusercontent.com/u/51878773?v=4",
    rating: 5,
    text: "Ceva ceva ceva",
  },
  {
    id: 4,
    name: "David Brown",
    photo: "https://avatars.githubusercontent.com/u/51878773?v=4",
    rating: 4,
    text: "Ceva ceva ceva",
  },
  {
    id: 5,
    name: "Emily Wilson",
    photo: "https://avatars.githubusercontent.com/u/51878773?v=4",
    rating: 5,
    text: "Ceva ceva ceva",
  },
];

const ReviewCard = ({ name, photo, rating, text }) => {
  return (
    <div className="review-card">
      <div className="review-header">
        <img src={photo} alt={name} className="review-photo" />
        <span className="review-name">{name}</span>
      </div>
      <div className="review-rating">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="star">⭐</span>
        ))}
      </div>
      <p className="review-text">{text}</p>
    </div>
  );
};

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0); // Define touchStart state

  const handleSwipe = (e) => {
    const touchEnd = e.changedTouches[0].clientX;

    if (touchStart - touchEnd > 50) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }
    if (touchEnd - touchStart > 50) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    }
  };

  return (
    <div className="reviews-container" id="rewiews">
      {/* Desktop: Grid Layout */}
      <div className="reviews-grid">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>

      {/* Mobile: Swipeable Slider */}
      <div
        className="reviews-slider" 
        onTouchStart={(e) => setTouchStart(e.changedTouches[0].clientX)}
        onTouchEnd={handleSwipe}
        id="rewiews"
      >
        <ReviewCard {...reviews[currentIndex]} />
      </div>
    </div>
  );
};

export default ReviewsSection;

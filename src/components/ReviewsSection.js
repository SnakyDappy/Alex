import React from "react";

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
  return (
    <div className="reviews-container">
      {reviews.map((review) => (
        <ReviewCard key={review.id} {...review} />
      ))}
    </div>
  );
};

export default ReviewsSection;

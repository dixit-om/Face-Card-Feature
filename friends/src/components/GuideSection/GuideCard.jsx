// GuideCard.jsx
import React, { useRef } from "react";
import "./GuideSection.css";

const GuideCard = ({ name, title, image, video }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.style.opacity = 1;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Autoplay blocked:", err.message);
        });
      }
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.style.opacity = 0;
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="guide-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt={name} className="guide-image" />
    </div>
  );
};

export default GuideCard;

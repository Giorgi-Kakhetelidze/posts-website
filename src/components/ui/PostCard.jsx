import React, { useState } from "react";
import "../../assets/styles/PostContainer.css";

function PostCard({ post }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = (e) => {
    e.stopPropagation(); 
    setIsPopupOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) {
      closePopup(e); 
    }
  };

  return (
    <article className="post-card" onClick={openPopup}>
      <div className="post-image">
        <img src={post.img} alt="post" />
      </div>
      <div className="post-category">{post.tags}</div>
      <h2 className="post-title">{post.title}</h2>
      <div className="post-meta">
        <span className="author">{post.autor}</span>
        <span className="date">{post.date}</span>
        <span className="views">{post.views} Views</span>
      </div>
      <p className="post-excerpt">{post.text}</p>

      {isPopupOpen && (
        <div
          className="popup-overlay"
          onClick={handleOutsideClick}
        >
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h2 className="popup-title">{post.title}</h2>
            <p className="popup-description">{post.text}</p>
            <button className="close-popup" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </article>
  );
}

export default PostCard;

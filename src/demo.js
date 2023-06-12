import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import './Carousel.css';

const Carousel = ({ data, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(data.length / pageSize);
  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const itemsToShow = data.slice(startIndex, endIndex);

  const handlePrevClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
    if (currentPage == 0) {
      setCurrentPage(totalPages - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
    if (currentPage == totalPages - 1) {
      setCurrentPage(0);
    }
  };

  const handleDotClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-items">
        {itemsToShow.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              {' '}
              {/* Added the class name overlay */}
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <div className="prev-button arrow" onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="dots-container">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentPage ? 'active-dot' : ''}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
        <div className="next-button arrow" onClick={handleNextClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

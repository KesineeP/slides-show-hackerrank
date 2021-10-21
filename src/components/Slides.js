import { setState } from "expect";
import React, { useState } from "react";

function Slides({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide(currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide + 1);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={() => setCurrentSlide(0)}
          disabled={currentSlide === 0 ? true : false}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={handlePrev}
          disabled={currentSlide === 0 ? true : false}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={handleNext}
          disabled={currentSlide === slides.length - 1 ? true : false}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[currentSlide].title}</h1>
        <p data-testid="text">{slides[currentSlide].text}</p>
      </div>
    </div>
  );
}

export default Slides;

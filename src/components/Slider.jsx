import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "../styles/slider.scss";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  const images = [
    "/img/slider/Слайд1.svg",
    "/img/slider/Слайд2.svg",
    "/img/slider/Слайд3.svg",
    "/img/slider/Слайд4.svg",
    "/img/slider/Слайд5.svg",
  ];

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <section className="slider">
      <div className="slider__top">
        <h2 className="slider__title">Корпоративная жизнь</h2>
        <div className="slider__button">
          <button
            onClick={goToPrev}
            style={{ background: "none", border: "none", cursor: "pointer", marginRight: "20px", }}
          >
            <img
              src="img/slider/previous.svg"
              alt="Previous"
              style={{ width: "56px", height: "56px" }}
            />
          </button>
          <button
            onClick={goToNext}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <img
              src="img/slider/next.svg"
              alt="Next"
              style={{ width: "56px", height: "56px" }}
            />
          </button>
        </div>
      </div>
      <div style={{ textAlign: "center", position: "relative" }}>
        <Slider ref={sliderRef} {...settings}>
          {images.map((img, index) => (
            <div key={index} className="slider__img">
              <img
                src={img}
                alt={`Slide ${index}`}
                style={{ width: "auto", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </Slider>
        <div className="slider__indicator">
          {images.map((_, index) => (
            <span
              key={index}
              style={{
                height: "6px", 
                width: "214px", 
                marginTop: "28px",
                backgroundColor:
                  index === currentIndex ? "var(--2)" : "lightgray",
                display: "inline-block",
                borderRadius: "2px", 
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;

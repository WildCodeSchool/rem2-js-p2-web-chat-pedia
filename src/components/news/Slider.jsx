import React, { useEffect, useState } from 'react';
import SliderContent from './SliderContent';
import Dots from './Dots';
import Arrows from './Arrows';
import './Slider.css';

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderImage, setSliderImage] = useState([]);

  const len = sliderImage.length - 1;
  useEffect(() => {
    fetch('https://a.nacapi.com/projet2')
      .then((response) => response.json())
      .then((data) => setSliderImage(data));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className='Slider'>
      <h1 className='text'>suggestion!</h1>
      <p>Les actualités de la semaine :</p>
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
    </div>
  );
}

export default Slider;

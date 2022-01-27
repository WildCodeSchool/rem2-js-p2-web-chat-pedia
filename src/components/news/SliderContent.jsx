import React from 'react';

function SliderContent({ activeIndex, sliderImage }) {
    return (
        <section>
            {sliderImage.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? 'slides active' : 'inactive'}
                >
                    <a href={slide.link} target="_blank" rel="noreferrer noopener"><img className="slide-image" src={slide.image} alt="" /></a>
                </div>
            ))}
        </section>
    );
}

export default SliderContent;

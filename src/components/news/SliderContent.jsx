import React from 'react';

function SliderContent({ activeIndex, sliderImage }) {
    return (
        <section>
            {sliderImage.map((slide, index) => (
                <div
                    key={index}
                    className={index === activeIndex ? 'slides active' : 'inactive'}
                >
                    <img className="slide-image" src={slide.image} alt="" />
                </div>
            ))}
        </section>
    );
}

export default SliderContent;

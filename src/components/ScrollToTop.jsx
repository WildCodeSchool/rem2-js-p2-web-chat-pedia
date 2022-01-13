import React from 'react';
import './ScrollToTop.css';

const ScrollToTop = (props) => {
    return (
        <div>
            <div  className={props.showGoTop} onClick={props.scrollUp}>
                <button className="goTop">
                    <img src="./assets/arrowscroll.png" alt="logo flèche" className="goTop-img"/>
                </button>
            </div>
        </div>
    )
}

export default ScrollToTop;

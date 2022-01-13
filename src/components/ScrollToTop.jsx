import React, {useState, useEffect} from 'react';
import './ScrollToTop.css';
import logoFlèche from '../assets/arrowscroll.png'


const ScrollToTop = (showBelow) => {

       const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if(window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else  {
            if (show) setShow(false)
        }
    }

    useEffect(() => {
        if(showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return() => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    const handleClick = () => {
        window[`scrollTo`]({top:0, behavior:`smooth`})
    }

    return (
        <div>
            {show && 
                <button onClick={handleClick} className="button">
                    <img src={logoFlèche} alt="logo flèche"/>
                </button>  
            }
        </div> 
    )
}

export default ScrollToTop;

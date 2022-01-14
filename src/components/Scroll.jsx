import React,{useEffect,useState} from 'react'
import './Scroll.css';
import logoFlèche from '../assets/arrowscroll.png'


const Scroll = () => {

    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

    return (
        <div>
            {showButton && (
                <button onClick={scrollToTop} className="back-to-top">
                    <img src={logoFlèche} alt="logo flèche"/>
                </button>
      )}

        </div>
    )
}

export default Scroll

import React,{useEffect,useState} from 'react'
import './Scroll.css';
import logoFlèche from '../../assets/backtotop.png'


const Scroll = () => {

    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 10) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

    return (
        <div className="back-to-top">
            {showButton && (
                <button onClick={scrollToTop}>
                    <img src={logoFlèche} alt="logo flèche"/>
                </button>
      )}

        </div>
    )
}

export default Scroll

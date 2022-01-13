import React from "react";
import './App.css';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showGoTop, setShowGoTop] = useState("goTopHidden");

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);

    if (scrollPosition > 50) {
      return setshowGoTop("goTop");
    } else if (scrollPosition < 50) {
      return setshowGoTop("goTopHidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="App">
      <div ref={refScrollUp}> </div>
      <ScrollToTop showGoTop={showGoTop} scrollUp={handleScrollUp} />
      <h1>Welcome web-chat-pedia!</h1>
      <div className="container">
        <div className="box box--1"></div>
        <div className="box box--2"></div>
        <div className="box box--3"></div>
        <div className="box box--4"></div>
        <div className="box box--5"></div>
      </div>

    </div>
  );
}

export default App;

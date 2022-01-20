import {useEffect, useState} from 'react';
import GenerateCard from './GenerateCard';
import "./GetCards.css"

function GetCards({ devtype, tags, format }) {
  const [cards, setCards] = useState([]);
  
  useEffect(()=> {
    fetch("https://a.nacapi.com/AssetsDevList")
    .then(response => response.json())
    .then(data => setCards(data))
    .catch(console.error)
  }, [] );

  return (
    <div className="GetCards">
      {
      cards &&
      cards
      .filter((searchedCard) =>
        searchedCard.devtype.includes(devtype)
        && searchedCard.tags.includes(tags)
        && searchedCard.format.includes(format))
      .map((resultCard) => (
        <div key= {resultCard.id}>
          <GenerateCard card={resultCard}/>
        </div>
      ))
      }
    </div>
  );
}

export default GetCards;
import React from 'react'
import CatHunt from '../../assets/cat-hunt.png'
import CatHunt0 from '../../assets/cat-hunt-zero.png'
import GenerateCard from '../cards/GenerateCard'

const SearchResults = ({searchingCards}) => {
  return (
    <div className="SearchResults">
      <div className='search-results'>
          <div>
            {searchingCards.length !== 0 ?
              <div className='display-cards-flex'>
                <div className='display-cards-title'>
                  <h1>Résultats de la chat-sse</h1>
                  <div className='animate__animated animate__bounce animate__infinite'>
                    <img src={CatHunt} alt="results cat" className='results-cards-cat' />
                  </div>
                </div>
                {searchingCards.map((resultCard, index) =>
                  <div key={index}>
                    <GenerateCard card={resultCard} />
                  </div>)}
              </div>
              :
              <div className='display-cards-flex'>
                <div className='display-cards-title'>
                  <h1>Uh oh, rien pour le moment ...</h1>
                  <div className='animate__animated animate__bounce animate__infinite'>
                    <img src={CatHunt0} alt="no result cat" className="results-cards-cat" />
                  </div>
                </div>
              </div>
            }
          </div>
      </div>
    </div>
  )
}

export default SearchResults

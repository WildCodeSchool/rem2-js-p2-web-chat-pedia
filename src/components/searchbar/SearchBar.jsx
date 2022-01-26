import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import "./SearchBar.css"

function SearchBar() {
    const [searchCard, setSearchCard] = useState('')
    let navigate = useNavigate()

    function goToResults() {
         navigate(`/results/${searchCard}`);
    }

    return (
        <div className="Searchbar">
            <div className="searchbar-element">
                <form method="get">
                    <div className="searchbar-field">
                        <div className="searchbar-input">
                            <input
                                type="text"
                                placeholder="Rechercher"
                                onChange={(e) => setSearchCard(e.target.value)}
                                value={searchCard}
                                // onKeyPress={(e) => searchCard !== '' && e.key === 13 ? goToResults() : null}
                            />
                        </div>

                        {searchCard !== '' ?
                        <div className='clear-button'>
                            <button onClick={() => setSearchCard('')}><span><i className="material-icons">clear</i></span></button>
                        </div>
                        :
                        null
                        }

                        <div className="searchbar-logo" id="s-cover">
                            <button onClick={(e) => searchCard !== '' ? goToResults(e) : e.preventDefault()}>
                                <div id="s-circle">
                                </div>
                                <span>
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchBar


import { useState, useEffect } from 'react';
import GetCards from '../cards/GetCards';
import "./SearchBar.css"

function SearchBar() {
    const [cards, setCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchShow, setSearchShow] = useState(false);

    useEffect(() => {
        fetch("https://a.nacapi.com/AssetsDevList")
            .then(response => response.json())
            .then(data => setCards(data))
            .catch(console.error)
    }, []);

    const handleSearchTerm = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    };

    const activateSearch = (e) => {
        e.preventDefault();
        setSearchShow(true);
    }

    return (
        <div className="Searchbar">
            <div className="searchbar-element">
                <form method="get" action="">
                    <div className="searchbar-field">
                        <div className="searchbar-input">
                            <input
                                type="text"
                                placeholder="Rechercher"
                                onChange={handleSearchTerm}
                            />
                        </div>
                        <div className="searchbar-logo" id="s-cover">
                            <button type="submit"
                                onClick={() => activateSearch}>
                                <div id="s-circle">
                                </div>
                                <span>
                                </span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className='search_results'>
                {searchShow ?
                    cards &&
                    cards
                        .filter((searchedCard) =>
                            searchedCard.title.includes(searchTerm)
                                .map((resultCard) => (
                                    <div key={resultCard.id}>
                                        <GetCards card={resultCard} />
                                    </div>
                        )))
                    :
                    null
                }
            </div>
        </div>
    )
}

export default SearchBar;


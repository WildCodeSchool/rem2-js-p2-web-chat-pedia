import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GetCards from '../cards/GetCards';
import "./SearchBar.css"

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState('');

    // useEffect(() => {
    //     fetch("https://a.nacapi.com/AssetsListP2")
    //         .then(response => response.json())
    //         .then(data => setCards(data))
    //         .catch(console.error)
    // }, []);

    const handleSearchTerm = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    };

    // const activateSearch = (e) => {
    //     e.preventDefault();
    //     cards &&
    //         cards
    //             .filter((searchedCard) =>
    //                 searchedCard.title.includes(searchTerm))
    //             .map((resultCard) =>
    //                 <div key={resultCard.id}>
    //                     <GetCards card={resultCard} />
    //                 </div>
    //             )
    // }

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
                            // onKeyPress={(e) => e.key === 13}
                            />
                        </div>
                        <div className="searchbar-logo" id="s-cover">
                            <NavLink to="results" >
                                <button type="submit">
                                    <div id="s-circle">
                                    </div>
                                    <span>
                                    </span>
                                </button>
                            </ NavLink>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchBar;


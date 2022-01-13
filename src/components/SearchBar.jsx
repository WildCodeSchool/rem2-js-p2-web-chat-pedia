import { useState, useEffect } from 'react';
import "./SearchBar.css"

function SearchBar() {

    const [cards, setCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=> {
      fetch("https://a.nacapi.com/AssetsDevList")
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(console.error)
    }, [] );

    const handleSearchTerm = (e) => {
        console.log(e.target.value);
        let value = e.target.value;
        setSearchTerm(value);
    };

    console.log(searchTerm)

    return (
        <>
            <div className="SearchBar">
                <input type="text" name="searchBar" id="searchBar" placeholder='Rechercher' onChange={handleSearchTerm}/>
            </div>
            <div className='search_results'>
                {cards
                .filter((value) => {
                    return value.title.toLowerCase().includes(searchTerm.toLowerCase());
                })
                .map((value) => {
                    return <div className='search_result' key={value.id}>{value.title}</div>
                } )}
            </div>
        </>
    )
}

export default SearchBar;
import { useState, useEffect } from 'react';
import "./SearchBar.css"

function SearchBar() {

    const [cards, setCards] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchShow, setSearchShow] = useState(false);

    useEffect(()=> {
      fetch("https://a.nacapi.com/AssetsDevList")
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(console.error)
    }, [] );

    const handleSearchTerm = (e) => {
        let value = e.target.value;
        value.length >= 2 && setSearchTerm(value);
        setSearchTerm(e.target.value);
            if(e.target.value===""){
                setSearchShow(false);
            }
            else {
                setSearchShow(true);
            }
    };

    return (
        <div className="cover">
            <form method="get" action="">
                <div className="SearchBar">
                    <div className="SearchBar-Input">
                        <input type="text" name="searchBar" id="searchBar" placeholder='Rechercher' onChange={handleSearchTerm}/>
                    </div>
                    <div className="SearchBar-Button" id="s-cover">
                        <button type="submit" onClick={(e) => setSearchTerm()}>
                            <div id="s-circle">
                            </div>
                            <span>
                            </span>
                        </button>
                    </div>
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
            </form>
        </div>
    )
}

export default SearchBar;


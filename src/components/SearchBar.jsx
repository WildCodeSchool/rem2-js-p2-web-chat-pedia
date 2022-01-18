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
                            {/* <div id="s-circle">
                            </div> 
                            <span>
                            </span>
                            */}
                        </button>
                    </div>
                </div>
                {/* <div className='search_results'>
                    {cards
                    .filter((value) => {
                        return value.image.toLowerCase().includes(searchTerm.toLowerCase());
                    })
                    .map((value) => {
                        return <div className='search_result' key={value.id}>{value.image}</div>
                    } )}
                </div> */}
                <div className='search_results'>
                    {cards
                    .filter((value) => {
                        return value.language.toLowerCase().includes(searchTerm.toLowerCase());
                    })
                    .map((value) => {
                        return <div className='search_result' key={value.id}>{value.language}</div>
                    } )}
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
                {/* <div className='search_results'>
                    {cards
                    .filter((value) => {
                        return value.link.toLowerCase().includes(searchTerm.toLowerCase());
                    })
                    .map((value) => {
                        return <div className='search_result' key={value.id}>{value.link}</div>
                    } )}
                </div>
                <div className='search_results'>
                    {cards
                    .filter((value) => {
                        return value.description.toLowerCase().includes(searchTerm.toLowerCase());
                    })
                    .map((value) => {
                        return <div className='search_result' key={value.id}>{value.description}</div>
                    } )}
                </div>
                <div className='search_results'>
                    {cards
                    .filter((value) => {
                        return value.devtype.toLowerCase().includes(searchTerm.toLowerCase());
                    })
                    .map((value) => {
                        return <div className='search_result' key={value.id}>{value.devtype}</div>
                    } )}
                </div> */}
                <div className='search_results'>
                    {cards
                    .filter((value) => {
                        return value.tags.toLowerCase().includes(searchTerm.toLowerCase());
                    })
                    .map((value) => {
                        return <div className='search_result' key={value.id}>{value.tags}</div>
                    } )}
                </div>
                {/* <div className='search_results'>
                    {cards
                    .filter((value) => {
                        return value.format.toLowerCase().includes(searchTerm.toLowerCase());
                    })
                    .map((value) => {
                        return <div className='search_result' key={value.id}>{value.format}</div>
                    } )}
                </div>
                <div className='search_results'>
                    {cards
                    .filter((value) => {
                        return value.submitter.toLowerCase().includes(searchTerm.toLowerCase());
                    })
                    .map((value) => {
                        return <div className='search_result' key={value.id}>{value.submitter}</div>
                    } )}
                </div> */}
            </form>
        </div>
    )
}

export default SearchBar;


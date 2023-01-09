import "./SearchBar.scss";

function SearchBar({onInputChange}){
    return (
        <div className="SearchBar">
            <input type="search" className="SearchBar__input" id="SearchBar__input" onChange={ (e) => onInputChange(e.target.value)} />
            <label htmlFor="SearchBar__input" className="SearchBar__label">Search</label>
        </div>
    )
}

export default SearchBar;

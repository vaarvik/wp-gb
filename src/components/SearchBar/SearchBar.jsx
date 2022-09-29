import useGutenbergStore from "../../store/store";
import "./SearchBar.scss";

function SearchBar(){
  const updateFilter = useGutenbergStore(state => state.updateFilter);
    return (
        <div className="SearchBar">
            <input type="search" className="SearchBar__input" id="SearchBar__input" onChange={ (e) => updateFilter(e.target.value)} />
            <label htmlFor="SearchBar__input" className="SearchBar__label">Search</label>
        </div>
    )
}

export default SearchBar;

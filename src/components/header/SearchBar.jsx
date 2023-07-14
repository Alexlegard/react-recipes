import { useState } from "react";
import { useGlobalStateStore } from "utils/store";
import "./SearchBar.css"

function SearchBar(props) {
    const { handleSearchBarSubmit } = props;
    const searchValue = useGlobalStateStore(state => state.searchValue)
    const [inputValue, setInputValue] = useState(searchValue || "")

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearchBarSubmit(inputValue);
    }

    return (
        <div className="searchBarContainer">
            <form className="searchForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="searchBar"
                    placeholder="Search..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" className="searchbar-submit-btn">
                    Search
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
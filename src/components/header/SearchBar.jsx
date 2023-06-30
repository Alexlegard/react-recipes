import { useGlobalStateStore } from "utils/store";

function SearchBar(props) {
    const { handleSearchBarChange } = props;
    const setSearchValue = useGlobalStateStore(state => state.setSearchValue)
    const searchValue = useGlobalStateStore(state => state.searchValue)

    return (
        <div className="searchBarContainer">
            <input
                type="text"
                className="searchBar"
                placeholder="Search..."
                value={searchValue || ''}
                onChange={(e) => {
                    handleSearchBarChange(e.target.value);
                }}
            />
        </div>
    );
}

export default SearchBar;
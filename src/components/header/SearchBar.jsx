function SearchBar(props) {
    const { searchValue, setSearchValue, handleSearchBarChange } = props;

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
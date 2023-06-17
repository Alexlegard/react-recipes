function SearchBar(props) {
    const { searchValue, setSearchValue } = props;

    function handleSearchBarChange(value) {
        setSearchValue(value);
    }

    console.log("Hello! " + searchValue);

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
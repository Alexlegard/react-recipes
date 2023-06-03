function SearchBar() {

    function handleSearchBarChange() {
        
    }

    return (
        <div className="searchBarContainer">
            <input 
                type="text"
                className="searchBar"
                placeholder="Search..."
                value={value}
                onChange={(e)=>{
                    handleSearchBarChange(e.target.value);
                }}
            />
        </div>
    );
}

export default SearchBar;
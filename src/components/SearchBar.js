const SearchBar = ({ isSearchBarVisible, setIsSearchBarVisible }) => {
  const handleSearchEnter = () => {
    console.log("search enter button clicked");
    // setIsSearchBarVisible(false);
  };

  return (
    <>
      {isSearchBarVisible && (
        <div className="search-bar">
          <input className="search-bar__input" type="text" placeholder="Search anything... 🔎" />
          <button className="search-bar__button" onClick={handleSearchEnter}>
            Enter
          </button>
        </div>
      )}
    </>
  );
};

export default SearchBar;

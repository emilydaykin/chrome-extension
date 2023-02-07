const SearchBar = ({ setIfSearchEntered }) => {
  const handleSearchEnter = () => {
    console.log("search enter button clicked");
    setIfSearchEntered(true);
  };

  return (
    <>
      <div className="search-bar">
        <input className="search-bar__input" type="text" placeholder="Search anything... 🔎" />
        <button className="search-bar__button" onClick={handleSearchEnter}>
          Enter
        </button>
      </div>
    </>
  );
};

export default SearchBar;

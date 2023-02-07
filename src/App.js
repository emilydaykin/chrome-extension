import { useState } from "react";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";

function App() {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(true);

  const urls = {
    url1: "https://www.google.com",
    url2: "https://www.frontdoor.xyz",
    url3: "https://reactjs.org/",
  };

  return (
    <>
      <SearchBar
        isSearchBarVisible={isSearchBarVisible}
        setIsSearchBarVisible={setIsSearchBarVisible}
      />
      <Card link={urls.url1} />
      <Card link={urls.url2} />
      <Card link={urls.url3} />
    </>
  );
}

export default App;

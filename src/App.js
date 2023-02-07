/*global chrome*/

import { useState } from "react";
import Card from "./components/Card";
import SearchBar from "./components/SearchBar";

function App() {
  // Not working yet...
  chrome.commands.getAll((commands) => {
    for (let i = 0; i < commands.length; ++i) {
      if (commands[i].shortcut === "Ctrl+K") {
        console.log("The shortcut 'Ctrl+K' is already used by another extension.");
        chrome.commands.reset(() => {
          chrome.commands.update({
            name: "run-extension",
            shortcut: "Ctrl+K",
          });
        });
        // chrome.commands.update({
        //   name: "run-extension",
        //   shortcut: "Alt+Shift+K",
        // });
        break;
      }
    }
  });

  const [ifSearchEntered, setIfSearchEntered] = useState(false);

  const urls = {
    url1: "https://www.google.com",
    url2: "https://www.frontdoor.xyz",
    url3: "https://reactjs.org/",
  };

  return (
    <>
      <SearchBar setIfSearchEntered={setIfSearchEntered} />
      {ifSearchEntered && (
        <>
          <Card link={urls.url1} />
          <Card link={urls.url2} />
          <Card link={urls.url3} />
        </>
      )}
    </>
  );
}

export default App;

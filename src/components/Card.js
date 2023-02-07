/*global chrome*/

const Card = ({ link }) => {
  const handleCardClick = (e) => {
    // console.log(e.target.querySelector("a").href);
    // console.log(window.location);
    // window.location.assign("wwww.google.com");
    // chrome.tabs.query(
    //   {
    //     currentWindow: true,
    //     active: true,
    //   },
    //   ([tab]) => {
    //     // const url = new URL(tab.url);
    //     const url = new URL(link.url);
    //     chrome.tabs.update({
    //       url: url.origin,
    //       // url: link,
    //     });
    //   }
    //   // chrome.tabs.update({
    //   //   // url: url.origin,
    //   //   url: link,
    //   // })
    // );
    console.log("link:", link);

    chrome.tabs.query(
      {
        active: true,
        currentWindow: true,
      },
      (tabs) => {
        chrome.tabs.update(tabs[0].id, { url: link });
      }
    );

    // console.log("url:", url);
    // window.open(url);
    // chrome.tabs.update({
    //   url: "http://www.example.com/",
    // });
    // window.location.href = e.target.querySelector("a").href;
  };

  return (
    <div className="card" onClick={handleCardClick}>
      {/* <a
        className="card__link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
    </div>
  );
};

export default Card;

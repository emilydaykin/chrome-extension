/*global chrome*/

const Card = ({ link }) => {
  const handleCardClick = () => {
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true,
      },
      (tabs) => {
        chrome.tabs.update(tabs[0].id, { url: link });
      }
    );
  };

  return <div className="card" onClick={handleCardClick}></div>;
};

export default Card;

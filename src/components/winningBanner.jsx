import React from 'react';

const WinningBanner = function displayWinner(props) {
  if (props.seriesWinner === 'HOU') {
    return (
      <div>
        <h4>Astros Win the World Series</h4>
        <img src="../images/Astrodome.jpg" alt="Astros Win" />
      </div>
    )
  } else if (props.seriesWinner === 'WSH') {
    return (
      <div>
        <h4>Nationals Win the World Series</h4>
        <img src="../images/NatsRace.jpg" alt="Nationals Win" />
      </div>
    )
  } else {
    return null;
  }
}

export default WinningBanner;

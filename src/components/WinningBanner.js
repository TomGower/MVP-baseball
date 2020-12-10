import React from 'react';

const WinningBanner = ({ seriesWinner }) => {
  if (seriesWinner === 'HOU') {
    return (
      <div>
        <h4>Astros Win the World Series</h4>
        <img src="../images/Astrodome.jpg" alt="Astros Win" />
      </div>
    )
  } else if (seriesWinner === 'WSH') {
    return (
      <div>
        <h4>Nationals Win the World Series</h4>
        <img src="../images/NatsRace.jpg" alt="Nationals Win" />
      </div>
    )
  }
  return null;
}

export default WinningBanner;

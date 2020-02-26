import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houScore: 0,
      wasScore: 0,
      currentInning: 1,
      homeTeam: 1,
      wasBatters: ['Turner', 'Eaton', 'Rendon', 'Soto', 'Kendrick', 'Cabrera', 'Zimmerman', 'Suzuki', 'Robles'],
      houBatters: ['Springer', 'Altuve', 'Brantley', 'Bregman', 'Gurriel', 'Alvarez', 'Correa', 'Chirinos', 'Reddick'],
      wasPitchers: {
        1: 'Scherzer',
        2: 'Strasburg',
        3: 'Sanchez',
        4: 'Corbin',
        5: 'Scherzer',
        6: 'Strasburg',
        7: 'Sanchez'
      },
      houPitchers: {
        1: 'Cole',
        2: 'Verlander',
        3: 'Greinke',
        4: 'bullpen',
        5: 'Cole',
        6: 'Verlander',
        7: 'Greinke'
      },
      wasWins: 0,
      houWins: 0,
      houPitcher: null,
      wasPitcher: null,
      currentPitcher: {
        kRate: .39902,
        bbRate: .062424,
        gbRate: .67,
        hrRate: .127,
        babip: .276,
        xbRate: .274336
      },
      currentBatter: {
        kRate: .200303,
        bbRate: .163885,
        gbRate: .73,
        hrRate: .153,
        babip: .312,
        xbRate: .310924
      },
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    let currentGame = this.state.wasWins + this.state.houWins + 1;
    this.setState({
      houPitcher: this.state.houPitchers[currentGame],
      wasPitcher: this.state.wasPitchers[currentGame]
    })
  }

  onClick(e) {
    e.preventDefault();
    let result;
    let randVal = Math.random();
    let kVal = (this.state.currentPitcher.kRate + this.state.currentBatter.kRate) / 2;
    let walkVal = (this.state.currentPitcher.bbRate + this.state.currentBatter.bbRate) / 2 + kVal;
    let battedBallRate = 1 - walkVal;
    let groundBallRate = (this.state.currentPitcher.gbRate + this.state.currentBatter.gbRate) / 2 / 2 * battedBallRate;
    let flyBallRate = battedBallRate - groundBallRate;
    let hrVal = flyBallRate * (this.state.currentPitcher.hrRate + this.state.currentBatter.hrRate) / 2 + walkVal;
    let bipRate = 1 - hrVal;
    let bipHitRate = bipRate * ((this.state.currentPitcher.babip + this.state.currentBatter.babip) / 2);
    let doubleRate = bipHitRate * ((this.state.currentPitcher.xbRate + this.state.currentBatter.xbRate) / 2);
    let singleRate = bipHitRate - doubleRate;
    let doubleVal = hrVal + doubleRate;
    let singleVal = doubleVal + singleRate;
    if (randVal < kVal) {
      result = 'strikeout';
    } else if (randVal < walkVal) {
      result = 'walk';
    } else if (randVal < hrVal) {
      result = 'home run';
    } else if (randVal < doubleVal) {
      result = 'double';
    } else if (randVal < singleVal) {
      result = 'single';
    } else {
      result = 'batted out';
    }
    console.log(kVal, walkVal, hrVal, doubleVal, singleVal);
    console.log(result);
  }

  render() {
    return (
      <div>
        Series Status: WSH {this.state.wasWins}-{this.state.houWins} HOU (best of seven) <br />
        WSH: {this.state.wasScore} <br />
        HOU: {this.state.houScore} <br />
        Inning: {Math.ceil(this.state.currentInning % 2)} <br />
        WSH P: {this.state.wasPitcher} <br />
        HOU P: {this.state.houPitcher} <br />
        Next WSH batter: {this.state.wasBatter} <br />
        Next HOU batter: {this.state.houBatter} <br />
        <button onClick={this.onClick}>Add Batter</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
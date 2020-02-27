import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wasWins: 0,
      houWins: 0,
      wasLineup: 0,
      houLineup: 0,
      houScore: 0,
      wasScore: 0,
      currentInning: 1,
      currentOut: 0,
      runner1: false,
      runner2: false,
      runner3: false,
      homeTeam: 1,
      wasBatters: [
        {name: 'Turner', kRate: .198594, bbRate: .075571, gbRate: .90, hrRate: .099, babip: .348, xbRate: .308824},
        {name: 'Eaton', kRate: .161585, bbRate: .099085, gbRate: .66, hrRate: .064, babip: .319, xbRate: .223776},
        {name: 'Rendon', kRate: .133127, bbRate: .123839, gbRate: .50, hrRate: .127, babip: .323, xbRate: .335714},
        {name: 'Soto', kRate: .200303, bbRate: .163885, gbRate: .73, hrRate: .153, babip: .312, xbRate: .310924},
        {name: 'Kendrick', kRate: .132432, bbRate: .072973, gbRate: .94, hrRate: .124, babip: .359, xbRate: .244898},
        {name: 'Cabrera', kRate: .123288, bbRate: .130137, gbRate: .67, hrRate: .095, babip: .330, xbRate: .323529},
        {name: 'Zimmerman', kRate: .205263, bbRate: .089474, gbRate: .89, hrRate: .097, babip: .297, xbRate: .236842},
        {name: 'Suzuki', kRate: .116505, bbRate: .064725, gbRate: .51, hrRate: .121, babip: .248, xbRate: .192982},
        {name: 'Robles', kRate: .226904, bbRate: .056726, gbRate: .65, hrRate: .088, babip: .310, xbRate: .295082}],
      houBatters: [
        {name: 'Springer', kRate: .203237, bbRate: .120504, gbRate: .80, hrRate: .211, babip: .305, xbRate: .227723},
        {name: 'Altuve', kRate: .149635, bbRate: .074818, gbRate: .99, hrRate: .174, babip: .303, xbRate: .254237},
        {name: 'Brantley', kRate: .103611, bbRate: .080063, gbRate: .84, hrRate: .086, babip: .320, xbRate: .267516},
        {name: 'Bregman', kRate: .120290, bbRate: .172464, gbRate: .70, hrRate: .146, babip: .281, xbRate: .317073},
        {name: 'Gurriel', kRate: .106209, bbRate: .060458, gbRate: .63, hrRate: .122, babip: .289, xbRate: .306569},
        {name: 'Alvarez', kRate: .254743, bbRate: .140921, gbRate: .60, hrRate: .211, babip: .366, xbRate: .366197},
        {name: 'Correa', kRate: .233645, bbRate: .109034, gbRate: .63, hrRate: .188, babip: .303, xbRate: .298246},
        {name: 'Chirinos', kRate: .286041, bbRate: .116705, gbRate: .56, hrRate: .125, babip: .306, xbRate: .328571},
        {name: 'Reddick', kRate: .12, bbRate: .065455, gbRate: .67, hrRate: .061, babip: .288, xbRate: .177419}],
      wasPitchers: [
        {name: 'Scherzer', kRate: .350649, bbRate: .047619, gbRate: .91, hrRate: .084, babip: .322, xbRate: .34127},
        {name: 'Strasburg', kRate: .298454, bbRate: .066587, gbRate: 1.05, hrRate: .108, babip: .276, xbRate: .218978},
        {name: 'Sanchez', kRate: .188202, bbRate: .081461, gbRate: .63, hrRate: .079, babip: .266, xbRate: .312977},
        {name: 'Corbin', kRate: .28503, bbRate: .083832, gbRate: .99, hrRate: .101, babip: .295, xbRate: .262069},
        {name: 'Scherzer', kRate: .350649, bbRate: .047619, gbRate: .91, hrRate: .084, babip: .322, xbRate: .34127},
        {name: 'Strasburg', kRate: .298454, bbRate: .066587, gbRate: 1.05, hrRate: .108, babip: .276, xbRate: .218978},
        {name: 'Sanchez', kRate: .188202, bbRate: .081461, gbRate: .63, hrRate: .079, babip: .266, xbRate: .312977},
      ],
      houPitchers: [
        {name: 'Cole', kRate: .399021, bbRate: .062424, gbRate: .67, hrRate: .127, babip: .276, xbRate: .274336},
        {name: 'Verlander', kRate: .354191, bbRate: .049587, gbRate: .57, hrRate: .136, babip: .219, xbRate: .346535},
        {name: 'Greinke', kRate: .243204, bbRate: .03629, gbRate: 1.06, hrRate: .075, babip: .291, xbRate: .211538},
        {name: 'bullpen', kRate: .243204, bbRate: .084742, gbRate: .83, hrRate: .122, babip: .272, xbRate: .260513},
        {name: 'Cole', kRate: .399021, bbRate: .062424, gbRate: .67, hrRate: .127, babip: .276, xbRate: .274336},
        {name: 'Verlander', kRate: .354191, bbRate: .049587, gbRate: .57, hrRate: .136, babip: .219, xbRate: .346535},
        {name: 'Greinke', kRate: .243204, bbRate: .03629, gbRate: 1.06, hrRate: .075, babip: .291, xbRate: .211538},
      ],
      houPitcher: {name: 'Cole', kRate: .399021, bbRate: .062424, gbRate: .67, hrRate: .127, babip: .276, xbRate: .274336},
      wasPitcher: {name: 'Scherzer', kRate: .350649, bbRate: .047619, gbRate: .91, hrRate: .084, babip: .322, xbRate: .34127},
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
      wasBatter: {name: 'Turner', kRate: .198594, bbRate: .075571, gbRate: .90, hrRate: .099, babip: .348, xbRate: .308824},
      houBatter: {name: 'Springer', kRate: .203237, bbRate: .120504, gbRate: .80, hrRate: .211, babip: .305, xbRate: .227723}
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    let currentGame = this.state.wasWins + this.state.houWins;
    let wasPosition = this.state.wasLineup % 9;
    let houPosition = this.state.houLineup % 9;
    this.setState({
      houPitcher: this.state.houPitchers[currentGame],
      wasPitcher: this.state.wasPitchers[currentGame],
      wasBatter: this.state.wasBatters[wasPosition],
      houBatter: this.state.houBatters[houPosition]
    })
  }

  winnerCheck() {
    let inning = this.state.currentInning;
    if ((inning === 18) && (this.state.houScore > this.state.wasScore)) {
      console.log('game over, Astros won');
      let currentGame = this.state.wasWins + this.state.houWins + 1;
      let astrosWins = this.state.houWins + 1;
      if (astrosWins === 4) {
        this.setState({
          seriesWinner: 'HOU'
        })
      } else {
        this.setState({
          houPitcher: this.state.houPitchers[currentGame],
          wasPitcher: this.state.wasPitchers[currentGame],
          wasBatter: this.state.wasBatters[0],
          houBatter: this.state.houBatters[0],
          houWins: this.state.houWins + 1,
          wasLineup: 0,
          houLineup: 0,
          houScore: 0,
          wasScore: 0,
          currentInning: 1,
          currentOut: 0,
          runner1: false,
          runner2: false,
          runner3: false,
        })
      }
    } else if ((inning > 18 && inning % 2 === 1) && (this.state.houScore > this.state.wasScore)) {
      console.log('game over, Astros won');
      let currentGame = this.state.wasWins + this.state.houWins + 1;
      let astrosWins = this.state.houWins + 1;
      if (astrosWins === 4) {
        this.setState({
          seriesWinner: 'HOU'
        })
      } else {
        this.setState({
          houPitcher: this.state.houPitchers[currentGame],
          wasPitcher: this.state.wasPitchers[currentGame],
          wasBatter: this.state.wasBatters[0],
          houBatter: this.state.houBatters[0],
          houWins: this.state.houWins + 1,
          wasLineup: 0,
          houLineup: 0,
          houScore: 0,
          wasScore: 0,
          currentInning: 1,
          currentOut: 0,
          runner1: false,
          runner2: false,
          runner3: false,
        })
      }
    } else if ((inning > 18 && inning % 2 === 1) && (this.state.wasScore > this.state.houScore)) {
      console.log('game over, Nationals won');
      let currentGame = this.state.wasWins + this.state.houWins + 1;
      let natsWins = this.state.wasWins + 1;
      if (natsWins === 4) {
        this.setState({
          seriesWinner: 'WSH'
        })
      } else {
        this.setState({
          houPitcher: this.state.houPitchers[currentGame],
          wasPitcher: this.state.wasPitchers[currentGame],
          wasBatter: this.state.wasBatters[0],
          houBatter: this.state.houBatters[0],
          wasWins: this.state.wasWins + 1,
          wasLineup: 0,
          houLineup: 0,
          houScore: 0,
          wasScore: 0,
          currentInning: 1,
          currentOut: 0,
          runner1: false,
          runner2: false,
          runner3: false,
        })
      }
    }
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
    console.log(result);
    if (result === 'walk') {
      if (this.state.runner1 && this.state.runner2 && this.state.runner3) {
        if (this.state.currentInning % 2 === 1) {
          this.setState({wasScore: this.state.wasScore + 1})
        } else {
          this.setState({houScore: this.state.houScore + 1})
        }
      } else if (this.state.runner1 && this.state.runner2) {
        this.setState({runner3: true});
      } else if (this.state.runner1) {
        this.setState({runner2: true})
      } else {
        this.setState({runner1: true})
      }
    } else if (result === 'single') {
      if (this.state.runner1 && this.state.runner2 && this.state.runner3) {
        if (this.state.currentInning % 2 === 1) {
          this.setState({wasScore: this.state.wasScore + 1})
        } else {
          this.setState({houScore: this.state.houScore + 1})
        }
      } else if (this.state.runner1 && this.state.runner2) {
        this.setState({runner3: true})
      } else if (this.state.runner2 && this.state.runner3) {
        if (this.state.currentInning % 2 === 1) {
          this.setState({
            wasScore: this.state.wasScore + 1,
            runner1: true,
            runner2: false
          })
        } else {
          this.setState({
            houScore: this.state.houScore + 1,
            runner1: true,
            runner2: false
          })
        }
      } else if (this.state.runner1 && this.state.runner3) {
        if (this.state.currentInning % 2 === 1) {
          this.setState({
            wasScore: this.state.wasScore + 1,
            runner2: true,
            runner3: false
          })
        } else {
          this.setState({
            houScore: this.state.houScore + 1,
            runner2: true,
            runner3: false
          })
        }
      } else if (this.state.runner1) {
        this.setState({runner2: true})
      } else if (this.state.runner2) {
        this.setState({
          runner1: true,
          runner2: false,
          runner3: true
        })
      } else if (this.state.runner3) {
        if (this.state.currentInning % 2 === 1) {
          this.setState({
            wasScore: this.state.wasScore + 1,
            runner1: true,
            runner3: false
          })
        } else {
          this.setState({
            houScore: this.state.houScore + 1,
            runner1: true,
            runner3: false
          })
        }
      } else {
        this.setState({runner1: true})
      }
    } else if (result === 'double') {
      if (this.state.runner1 && this.state.runner2 && this.state.runner3) {
        if (this.state.currentInning % 2 === 1) {
          this.setState({
            wasScore: this.state.wasScore + 2,
            runner1: false
          })
        } else {
          this.setState({
            houScore: this.state.houScore + 2,
            runner1: false
          })
        }
      } else if (this.state.runner1 && this.state.runner2) {
        if (this.state.currentInning % 2 === 1) {
          this.setState({
            wasScore: this.state.wasScore + 1,
            runner1: false,
            runner3: true
          })
        } else {
          this.setState({
            houScore: this.state.houScore + 1,
            runner1: false,
            runner3: true
          })
        }
      } else if (this.state.runner2 && this.state.runner3) {
        if (this.state.currentInning % 2 === 1) {
          this.setState({
            wasScore: this.state.wasScore + 2,
            runner3: false
          })
        } else {
          this.setState({
            houScore: this.state.houScore + 1,
            runner3: false
          })
        }
      } else if (this.state.runner1 && this.state.runner3) {
        if (this.state.currentInning % 2 === 1) {
          this.setState({
            wasScore: this.state.wasScore + 1,
            runner1: false,
            runner2: true
          })
        } else {
          this.setState({
            houScore: this.state.houScore + 1,
            runner1: false,
            runner2: true
          })
        }
      } else if (this.state.runner1) {
        this.setState({
          runner2: true,
          runner3: true
        })
      } else if (this.state.runner2) {
        if (this.state.currentInning % 2 === 1) {
          this.setState({wasScore: this.state.wasScore + 1})
        } else {
          this.setState({houScore: this.state.houScore + 1})
        }
      } else if (this.state.runner3) {
        if (this.state.currentInning % 2 === 1) {
          this.setState({
            wasScore: this.state.wasScore + 1,
            runner2: true,
            runner3: false
          })
        } else {
          this.setState({
            houScore: this.state.houScore + 1,
            runner2: true,
            runner3: false
          })
        }
      } else {
        this.setState({runner2: true})
      }
    } else if (result === 'home run') {
      if ((this.state.runner1 && this.state.runner2) && this.state.runner3) {
        if (this.state.currentInning % 2 === 1) {
          this.setState({
            wasScore: this.state.wasScore + 4,
            runner1: false,
            runner2: false,
            runner3: false
          })
        } else {
          this.setState({
            houScore: this.state.houScore + 4,
            runner1: false,
            runner2: false,
            runner3: false
          })
        }
      } else if (this.state.runner1 && this.state.runner2) {
        if (this.state.currentInning % 2 === 1) {
          this.setState({
            wasScore: this.state.wasScore + 3,
            runner1: false,
            runner2: false
          })
        } else {
          this.setState({
            houScore: this.state.houScore + 3,
            runner1: false,
            runner2: false
          })
        }
      } else if (this.state.runner2 && this.state.runner3) {
        if (this.state.currentInning % 2 === 1) {
          this.setState({
            wasScore: this.state.wasScore + 3,
            runner2: false,
            runner3: false
          })
        } else {
          this.setState({
            houScore: this.state.houScore + 3,
            runner2: false,
            runner3: false
          })
        }
      } else if (this.state.runner1 && this.state.runner3) {
        if (this.state.currentInning % 2 === 1) {
          this.setState({
            wasScore: this.state.wasScore + 3,
            runner1: false,
            runner3: false
          })
        } else {
          this.setState({
            houScore: this.state.houScore + 3,
            runner1: false,
            runner3: false
          })
        }
      } else if (this.state.runner1) {
        if (this.state.currentInning % 2 === 1) {
          this.setState({
            wasScore: this.state.wasScore + 2,
            runner1: false
          })
        } else {
          this.setState({
            houScore: this.state.houScore + 2,
            runner1: false
          })
        }
      } else if (this.state.runner2) {
        if (this.state.currentInning % 2 === 1) {
          this.setState({
            wasScore: this.state.wasScore + 2,
            runner2: false
          })
        } else {
          this.setState({
            houScore: this.state.houScore + 2,
            runner2: false
          })
        }
      } else if (this.state.runner3) {
        if (this.state.currentInning % 2 === 1) {
          this.setState({
            wasScore: this.state.wasScore + 2,
            runner3: false
          })
        } else {
          this.setState({
            houScore: this.state.houScore + 2,
            runner3: false
          })
        }
      } else {
        if (this.state.currentInning % 2 === 1) {
          this.setState({wasScore: this.state.wasScore + 1})
        } else {
          this.setState({houScore: this.state.houScore + 1})
        }
      }
    }
    if (result === 'strikeout' || result === 'batted out') {
      let outs = this.state.currentOut + 1;
      let oldInning = this.state.currentInning;
      if (outs !== 3) {
        if (oldInning % 2 === 1) {
          let oldLineup = this.state.wasLineup + 1;
          this.setState({
            currentOut: outs,
            wasBatter: this.state.wasBatters[oldLineup % 9],
            wasLineup: oldLineup,
            currentBatter: this.state.wasBatters[oldLineup % 9]
          });
        } else {
          let oldLineup = this.state.houLineup + 1;
          this.setState({
            currentOut: outs,
            houBatter: this.state.houBatters[oldLineup % 9],
            houLineup: oldLineup,
            currentBatter: this.state.houBatters[oldLineup % 9]
          });
        }
      } else {
        this.winnerCheck();
        if (oldInning % 2 === 1) {
          let oldLineup = this.state.wasLineup + 1;
          this.setState({
            currentOut: 0,
            runner1: false,
            runner2: false,
            runner3: false,
            wasBatter: this.state.wasBatters[oldLineup % 9],
            wasLineup: oldLineup,
            currentBatter: this.state.houBatter,
            currentPitcher: this.state.wasPitcher,
            currentInning: oldInning + 1
          })
        } else {
          let oldLineup = this.state.houLineup + 1;
          this.setState({
            currentOut: 0,
            runner1: false,
            runner2: false,
            runner3: false,
            houBatter: this.state.houBatters[oldLineup % 9],
            houLineup: oldLineup,
            currentBatter: this.state.wasBatter,
            currentPitcher: this.state.houPitcher,
            currentInning: oldInning + 1
          })
        }
      }
    } else {
      let oldInning = this.state.currentInning;
      if (oldInning % 2 === 1) {
        let oldLineup = this.state.wasLineup + 1;
        this.setState({
          wasBatter: this.state.wasBatters[oldLineup % 9],
          wasLineup: oldLineup,
          currentBatter: this.state.wasBatters[oldLineup % 9]
        });
      } else {
        let oldLineup = this.state.houLineup + 1;
        this.setState({
          houBatter: this.state.houBatters[oldLineup % 9],
          houLineup: oldLineup,
          currentBatter: this.state.houBatters[oldLineup % 9]
        });
      }
    };
  }

  render() {
    return (
      <div>
        Series Status: WSH {this.state.wasWins}-{this.state.houWins} HOU (best of seven) <br />
        WSH: {this.state.wasScore} <br />
        HOU: {this.state.houScore} <br />
        Inning: {Math.ceil(this.state.currentInning / 2)} <br />
        WSH P: {this.statewasPitcher.name} <br />
        HOU P: {this.state.houPitcher.name} <br />
        Next WSH batter: {this.state.wasBatter.name} <br />
        Next HOU batter: {this.state.houBatter.name} <br />
        <button onClick={this.onClick}>Add Batter</button> <br />
        <h6>Thanks to baseball-reference.com for providing the data to create the pitcher-batter interactions.</h6>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
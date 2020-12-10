import React, { useState } from 'react';
import WinningBanner from './WinningBanner';

const wasBatters = [
  {name: 'Turner', kRate: .198594, bbRate: .075571, gbRate: .90, hrRate: .099, babip: .348, xbRate: .308824},
  {name: 'Eaton', kRate: .161585, bbRate: .099085, gbRate: .66, hrRate: .064, babip: .319, xbRate: .223776},
  {name: 'Rendon', kRate: .133127, bbRate: .123839, gbRate: .50, hrRate: .127, babip: .323, xbRate: .335714},
  {name: 'Soto', kRate: .200303, bbRate: .163885, gbRate: .73, hrRate: .153, babip: .312, xbRate: .310924},
  {name: 'Kendrick', kRate: .132432, bbRate: .072973, gbRate: .94, hrRate: .124, babip: .359, xbRate: .244898},
  {name: 'Cabrera', kRate: .123288, bbRate: .130137, gbRate: .67, hrRate: .095, babip: .330, xbRate: .323529},
  {name: 'Zimmerman', kRate: .205263, bbRate: .089474, gbRate: .89, hrRate: .097, babip: .297, xbRate: .236842},
  {name: 'Suzuki', kRate: .116505, bbRate: .064725, gbRate: .51, hrRate: .121, babip: .248, xbRate: .192982},
  {name: 'Robles', kRate: .226904, bbRate: .056726, gbRate: .65, hrRate: .088, babip: .310, xbRate: .295082}
];
const houBatters = [
  {name: 'Springer', kRate: .203237, bbRate: .120504, gbRate: .80, hrRate: .211, babip: .305, xbRate: .227723},
  {name: 'Altuve', kRate: .149635, bbRate: .074818, gbRate: .99, hrRate: .174, babip: .303, xbRate: .254237},
  {name: 'Brantley', kRate: .103611, bbRate: .080063, gbRate: .84, hrRate: .086, babip: .320, xbRate: .267516},
  {name: 'Bregman', kRate: .120290, bbRate: .172464, gbRate: .70, hrRate: .146, babip: .281, xbRate: .317073},
  {name: 'Gurriel', kRate: .106209, bbRate: .060458, gbRate: .63, hrRate: .122, babip: .289, xbRate: .306569},
  {name: 'Alvarez', kRate: .254743, bbRate: .140921, gbRate: .60, hrRate: .211, babip: .366, xbRate: .366197},
  {name: 'Correa', kRate: .233645, bbRate: .109034, gbRate: .63, hrRate: .188, babip: .303, xbRate: .298246},
  {name: 'Chirinos', kRate: .286041, bbRate: .116705, gbRate: .56, hrRate: .125, babip: .306, xbRate: .328571},
  {name: 'Reddick', kRate: .12, bbRate: .065455, gbRate: .67, hrRate: .061, babip: .288, xbRate: .177419}
];
const wasPitchers = [
  {name: 'Scherzer', kRate: .350649, bbRate: .047619, gbRate: .91, hrRate: .084, babip: .322, xbRate: .34127},
  {name: 'Strasburg', kRate: .298454, bbRate: .066587, gbRate: 1.05, hrRate: .108, babip: .276, xbRate: .218978},
  {name: 'Sanchez', kRate: .188202, bbRate: .081461, gbRate: .63, hrRate: .079, babip: .266, xbRate: .312977},
  {name: 'Corbin', kRate: .28503, bbRate: .083832, gbRate: .99, hrRate: .101, babip: .295, xbRate: .262069},
  {name: 'Scherzer', kRate: .350649, bbRate: .047619, gbRate: .91, hrRate: .084, babip: .322, xbRate: .34127},
  {name: 'Strasburg', kRate: .298454, bbRate: .066587, gbRate: 1.05, hrRate: .108, babip: .276, xbRate: .218978},
  {name: 'Sanchez', kRate: .188202, bbRate: .081461, gbRate: .63, hrRate: .079, babip: .266, xbRate: .312977},
];
const houPitchers = [
  {name: 'Cole', kRate: .399021, bbRate: .062424, gbRate: .67, hrRate: .127, babip: .276, xbRate: .274336},
  {name: 'Verlander', kRate: .354191, bbRate: .049587, gbRate: .57, hrRate: .136, babip: .219, xbRate: .346535},
  {name: 'Greinke', kRate: .243204, bbRate: .03629, gbRate: 1.06, hrRate: .075, babip: .291, xbRate: .211538},
  {name: 'bullpen', kRate: .243204, bbRate: .084742, gbRate: .83, hrRate: .122, babip: .272, xbRate: .260513},
  {name: 'Cole', kRate: .399021, bbRate: .062424, gbRate: .67, hrRate: .127, babip: .276, xbRate: .274336},
  {name: 'Verlander', kRate: .354191, bbRate: .049587, gbRate: .57, hrRate: .136, babip: .219, xbRate: .346535},
  {name: 'Greinke', kRate: .243204, bbRate: .03629, gbRate: 1.06, hrRate: .075, babip: .291, xbRate: .211538},
];

const App = () => {
  const [wasWins, setWasWins] = useState(0);
  const [houWins, setHouWins] = useState(0);
  const [wasLineup, setWasLineup] = useState(0);
  const [houLineup, setHouLineup] = useState(0);
  const [wasPitcher, setWasPitcher] = useState(wasPitchers[0]);
  const [houPitcher, setHouPitcher] = useState(houPitchers[0]);
  const [wasBatter, setWasBatter] = useState(wasBatters[0]);
  const [houBatter, setHouBatter] = useState(houBatters[0]);
  const [wasScore, setWasScore] = useState(0);
  const [houScore, setHouScore] = useState(0);
  const [currentPitcher, setCurrentPitcher] = useState(houPitchers[0]);
  const [currentBatter, setCurrentBatter] = useState(wasBatters[0]);
  const [currentInning, setCurrentInning] = useState(1);
  const [currentOut, setCurrentOut] = useState(0);
  const [runnerFirst, setRunnerFirst] = useState(false);
  const [runnerSecond, setRunnerSecond] = useState(false);
  const [runnerThird, setRunnerThird] = useState(false);
  const [seriesWinner, setSeriesWinner] = useState(null);

  const resetGame = game => {
    setHouPitcher(houPitchers[game]);
    setWasPitcher(wasPitchers[game]);
    setWasBatter(wasBatters[0]);
    setHouBatter(houBatters[0]);
    setWasLineup(0);
    setHouLineup(0);
    setWasScore(0);
    setHouScore(0);
    setCurrentInning(1);
    setCurrentOut(0);
    setRunnerFirst(false);
    setRunnerSecond(false);
    setRunnerThird(false);
  }

  const checkWinner = (oldInning) => {
    if ((oldInning === 17) && (houScore > wasScore)) {
      console.log(`game over, Astros won, ${houScore}-${wasScore}`);
      const nextGame = wasWins + houWins + 1;
      if (houWins + 1 === 4) {
        setSeriesWinner('HOU');
      } else {
        setHouWins(houWins + 1);
        // setCurrentGame(nextGame);
        resetGame(nextGame);
      }
      return true;
    } else if ((oldInning > 17 && oldInning % 2 === 0) && (houScore > wasScore)) {
      console.log(`game over, Astros won, ${houScore}-${wasScore}`);
      const nextGame = wasWins + houWins + 1;
      if (houWins + 1 === 4) {
        setSeriesWinner('HOU');
      } else {
        setHouWins(houWins + 1);
        // setCurrentGame(nextGame);
        resetGame(nextGame);
      }
      return true;
    } else if ((oldInning > 17 && oldInning % 2 === 0) && (wasScore > houScore)) {
      console.log(`game over, Nationals won ${wasScore}-${houScore}`);
      const nextGame = wasWins + houWins + 1;
      if (wasWins + 1 === 4) {
        setSeriesWinner('WAS');
      } else {
        setWasWins(wasWins + 1);
        // setCurrentGame(nextGame);
        resetGame(nextGame);
      }
      return true;
    } else {
      return false;
    }
  }

  const bat = () => {
    let result;
    let randVal = Math.random();
    let kVal = (currentPitcher.kRate + currentBatter.kRate) / 2;
    let walkVal = (currentPitcher.bbRate + currentBatter.bbRate) / 2 + kVal;
    let battedBallRate = 1 - walkVal;
    let groundBallRate = (currentPitcher.gbRate / 2 + currentBatter.gbRate / 2) / 2 * battedBallRate;
    let flyBallRate = battedBallRate - groundBallRate;
    let hrVal = flyBallRate * (currentPitcher.hrRate + currentBatter.hrRate) / 2 + walkVal;
    let bipRate = 1 - hrVal;
    let bipHitRate = bipRate * ((currentPitcher.babip + currentBatter.babip) / 2);
    let doubleRate = bipHitRate * ((currentPitcher.xbRate + currentBatter.xbRate) / 2);
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
    console.log(currentBatter.name, result);
    return result;
  }

  const nextBatter = () => {
    if (currentInning % 2 === 1) {
      setWasBatter(wasBatters[(wasLineup + 1) % 9]);
      setCurrentBatter(wasBatters[(wasLineup + 1) % 9]);
      setWasLineup((wasLineup + 1) % 9);
    } else {
      setHouBatter(houBatters[(houLineup + 1) % 9]);
      setCurrentBatter(houBatters[(houLineup + 1) % 9]);
      setHouLineup((houLineup + 1) % 9);
    }
  }

  const moveRunners = (result) => {
    if (result === 'walk') {
      if (!runnerFirst) {
        setRunnerFirst(true);
      } else if (!runnerSecond) {
        setRunnerSecond(true);
      } else if (!runnerThird) {
        setRunnerThird(true);
      } else { // bases loaded
        currentInning % 2 === 1 ? setWasScore(wasScore + 1) : setHouScore(houScore + 1);
        if (currentInning >= 18 && currentInning % 2 === 0) checkWinner(currentInning);
      }
      nextBatter();
    } else if (result === 'single') {
      if ((runnerFirst && runnerSecond) && runnerThird) { // bases loaded
        currentInning % 2 === 1 ? setWasScore(wasScore + 1) : setHouScore(houScore + 1);
        if (currentInning >= 18 && currentInning % 2 === 0) checkWinner(currentInning);
      } else if (runnerFirst && runnerSecond) { // first and second
        setRunnerThird(true);
      } else if (runnerSecond && runnerThird) { // second and third
        setRunnerFirst(true);
        setRunnerSecond(false);
        currentInning % 2 === 1 ? setWasScore(wasScore + 1) : setHouScore(houScore + 1);
        if (currentInning >= 18 && currentInning % 2 === 0) checkWinner(currentInning);
      } else if (runnerFirst && runnerThird) { // first and third
        setRunnerSecond(true);
        setRunnerThird(false);
        currentInning % 2 === 1 ? setWasScore(wasScore + 1) : setHouScore(houScore + 1);
        if (currentInning >= 18 && currentInning % 2 === 0) checkWinner(currentInning);
      } else if (runnerThird) { // third
        setRunnerFirst(true);
        setRunnerThird(false);
        currentInning % 2 === 1 ? setWasScore(wasScore + 1) : setHouScore(houScore + 1);
        if (currentInning >= 18 && currentInning % 2 === 0) checkWinner(currentInning);
      } else if (runnerSecond) { // second
        setRunnerFirst(true);
        setRunnerSecond(false);
        setRunnerThird(true);
      } else if (runnerFirst) { // first
        setRunnerSecond(true);
      } else { // bases empty
        setRunnerFirst(true);
      }
      nextBatter();
    } else if (result === 'double') {
      if ((runnerFirst && runnerSecond) && runnerThird) { // bases loaded
        setRunnerFirst(false);
        currentInning % 2 === 1 ? setWasScore(wasScore + 2) : setHouScore(houScore + 2);
        if (currentInning >= 18 && currentInning % 2 === 0) checkWinner(currentInning);
      } else if (runnerFirst && runnerSecond) { // first and second
        setRunnerFirst(false);
        setRunnerThird(true);
        currentInning % 2 === 1 ? setWasScore(wasScore + 1) : setHouScore(houScore + 1);
        if (currentInning >= 18 && currentInning % 2 === 0) checkWinner(currentInning);
      } else if (runnerSecond && runnerThird) { // second and third
        setRunnerThird(false);
        currentInning % 2 === 1 ? setWasScore(wasScore + 2) : setHouScore(houScore + 2);
        if (currentInning >= 18 && currentInning % 2 === 0) checkWinner(currentInning);
      } else if (runnerFirst && runnerThird) { // first and third
        setRunnerFirst(false);
        setRunnerSecond(true);
        currentInning % 2 === 1 ? setWasScore(wasScore + 1) : setHouScore(houScore + 1);
        if (currentInning >= 18 && currentInning % 2 === 0) checkWinner(currentInning);
      } else if (runnerThird) { // third
        setRunnerSecond(true);
        setRunnerThird(false);
        currentInning % 2 === 1 ? setWasScore(wasScore + 1) : setHouScore(houScore + 1);
        if (currentInning >= 18 && currentInning % 2 === 0) checkWinner(currentInning);
      } else if (runnerSecond) { // second
        setRunnerSecond(true);
        currentInning % 2 === 1 ? setWasScore(wasScore + 1) : setHouScore(houScore + 1);
        if (currentInning >= 18 && currentInning % 2 === 0) checkWinner(currentInning);
      } else if (runnerFirst) { // first
        setRunnerFirst(false);
        setRunnerSecond(true);
        setRunnerThird(true);
      } else { // bases empty
        setRunnerSecond(true);
      }
      nextBatter();
    } else if (result === 'home run') {
      if ((runnerFirst && runnerSecond) && runnerThird) { // bases loaded
        setRunnerFirst(false);
        setRunnerSecond(false);
        setRunnerThird(false);
        currentInning % 2 === 1 ? setWasScore(wasScore + 4) : setHouScore(houScore + 4);
        if (currentInning >= 18 && currentInning % 2 === 0) checkWinner(currentInning);
      } else if (runnerFirst && runnerSecond) { // first and second
        setRunnerFirst(false);
        setRunnerSecond(false);
        currentInning % 2 === 1 ? setWasScore(wasScore + 3) : setHouScore(houScore + 3);
        if (currentInning >= 18 && currentInning % 2 === 0) checkWinner(currentInning);
      } else if (runnerSecond && runnerThird) { // second and third
        setRunnerSecond(false);
        setRunnerThird(false);
        currentInning % 2 === 1 ? setWasScore(wasScore + 3) : setHouScore(houScore + 3);
        if (currentInning >= 18 && currentInning % 2 === 0) checkWinner(currentInning);
      } else if (runnerFirst && runnerThird) { // first and third
        setRunnerFirst(false);
        setRunnerThird(false);
        currentInning % 2 === 1 ? setWasScore(wasScore + 3) : setHouScore(houScore + 3);
        if (currentInning >= 18 && currentInning % 2 === 0) checkWinner(currentInning);
      } else if (runnerThird) { // third
        setRunnerThird(false);
        currentInning % 2 === 1 ? setWasScore(wasScore + 2) : setHouScore(houScore + 2);
        if (currentInning >= 18 && currentInning % 2 === 0) checkWinner(currentInning);
      } else if (runnerSecond) { // second
        setRunnerSecond(false);
        currentInning % 2 === 1 ? setWasScore(wasScore + 2) : setHouScore(houScore + 2);
        if (currentInning >= 18 && currentInning % 2 === 0) checkWinner(currentInning);
      } else if (runnerFirst) { // first
        setRunnerFirst(false);
        currentInning % 2 === 1 ? setWasScore(wasScore + 2) : setHouScore(houScore + 2);
        if (currentInning >= 18 && currentInning % 2 === 0) checkWinner(currentInning);
      } else { // bases empty
        currentInning % 2 === 1 ? setWasScore(wasScore + 1) : setHouScore(houScore + 1);
        if (currentInning >= 18 && currentInning % 2 === 0) checkWinner(currentInning);
      }
      nextBatter();
    } else { // batted out or strikeout
      const outs = currentOut + 1;
      if (outs === 3) {
        let oldInning = currentInning;
        let hasWinner = checkWinner(oldInning);
        if (!hasWinner) {
          setRunnerFirst(false);
          setRunnerSecond(false);
          setRunnerThird(false);
          setCurrentOut(0);
          setCurrentInning(currentInning + 1);
          if (currentInning % 2 === 1) {
            setWasBatter(wasBatters[(wasLineup + 1) % 9]);
            setWasLineup((wasLineup + 1) % 9);
            setCurrentBatter(houBatter);
            setCurrentPitcher(wasPitcher);
          } else {
            setHouBatter(houBatters[(houLineup + 1) % 9]);
            setHouLineup((houLineup + 1) % 9);
            setCurrentBatter(wasBatter);
            setCurrentPitcher(houPitcher);
          }
        }       
      } else { // less than 3 outs, inning continues
        nextBatter();
        setCurrentOut(outs);
      }
    }
  }

  const onClick = (e) => {
    e.preventDefault();
    const res = bat();
    moveRunners(res);
  }

  return (
    <div>
      <h2 align="center">2019 World Serious</h2>
      <h4 align="center">Series Status: WSH {wasWins}-{houWins} HOU (best of seven)</h4>
      WSH pitcher: {wasPitcher.name} <br />
      HOU pitcher: {houPitcher.name} <br />
      Next WSH batter: {wasBatter.name} <br />
      Next HOU batter: {houBatter.name} <br />
      <br />
      <br />
      Current pitcher: {currentPitcher.name} <br />
      Current batter: {currentBatter.name} <br />

      Inning: {Math.ceil(currentInning / 2)}{currentInning % 2 === 1 ? <span>&#9650;</span> : <span>&#9660;</span>} <br />
      WSH: {wasScore} <br />
      HOU: {houScore} <br />
      Current outs: {currentOut} <br />
      Bases: {runnerFirst ? 'O' : '_'}-{runnerSecond ? 'O' : '_'}-{runnerThird ? 'O' : '_'} <br />
      <button onClick={onClick}>Batter Up!</button> <br />
      <WinningBanner seriesWinner={seriesWinner} />
      <h6>Thanks to baseball-reference.com for providing the data to create the pitcher-batter interactions.</h6>
    </div>
  )
}

export default App;

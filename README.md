# MVP-baseball

The goal for this two-day MVP is to create a baseball game simulator based on the 2019 World Series, played between the
Washington Nationals and the Houston Astros.

This will simulate a normal baseball game, featuring a starting pitcher for each team and nine starting batters
for each team that "bat" against the opposing starting pitcher. Like a normal baseball game, each half-inning
has 3 outs, and the team with the most runs after 9 innings (8.5 if the home team is leading) is declared the
winner.

The first stretch goal is to expand a single-game simulator to full best-of-seven World Series. This includes
a couple specific features. First, declaring a series winner after one team has won four games. Second, changing
the home team from Houston for the first two games to Washington for the next three and back to Houston for the
last two (if necessary). Third, having a designated hitter for the games played in Houston and no designated
hitter for the games played in Washington. Fourth, having a different starting pitcher for each game. This includes
an additional design choice, how to handle a "bullpen game" where neither team used a specific "starting pitcher."

This first stretch goal was partially completed. Declaring a series winner works. Using a different starting pitcher
for each game works. All batters are the same in all games, so are effectively being played with a designated
hitter. Houston also remains the home team for every game.

Additional stretch goals, like instituting "trash-can banging" to give the Astros an advantage or adjusting
statistics to reflect the use of more "dead" 2018 baseballs in some of the games, were not completed.

## Tech Stack

This will be primarily a React-based app. I considered using mySQL to store some information, probably including
starting pitchers, home game status and designated hitter information, and maybe other stuff, but did not end up
using it.

## Technical Challenges and Research

Building a realistic model for batter-pitcher interaction is the biggest initial challenge, including coding just
how that will work in JavaScript. Because I'm just getting over the flu, I decided against trying to incorporate any
new technologies in my app.

## Post-MVP Period Work

The code in the master branch, aside from gitignore and this README and any NPM updates, remains the same as it was
at the end of the 2-day Minimum Viable Product period.

The branch `hooks-refactor` contains a significant revision to the code done after the MVP period. This includes
several major changes. First, the code was changed from a class-based component to a functional component that
uses Hooks. Second, several repeated actions were pulled out into separate functions rather than all living inside
an overly-long onClick function. I also made some code style edits and did general cleanup.

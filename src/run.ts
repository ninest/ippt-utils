import { runScoreTable, runTimes } from './data/run-score-table';

export default function getRunScore(ageGroup: number, seconds: number): number[] {
  /*
  Seconds must not be above or below highest or lowest timing.
  - Any timing below the lower timing is still 50 points
  - Any timing above the highest timing is still 0 points
  */
  if (seconds > runTimes[0]) {
    seconds = runTimes[0];
  } else if (seconds < runTimes[runTimes.length - 1]) {
    seconds = runTimes[runTimes.length - 1];
  }

  /*
  Get position of seconds in runTimes
  */
  const position = runTimes.indexOf(seconds);

  /*
  Use position to get score from score from score table
  */
  const scoreList = runScoreTable[ageGroup - 1];
  const score = scoreList[position];

  /*
  Get seconds required to reduce to get the next point
  */
  let nextPointCounter = 0;

  for (const value of scoreList.slice(position)) {
    if (value == score) {
      nextPointCounter++;
    } else {
      break;
    }
  }

  return [score, nextPointCounter];
}

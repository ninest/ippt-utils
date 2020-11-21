import { stat } from 'fs';
import pushupScoreTable from './data/pushup-score-table';
import situpScoreTable from './data/pushup-score-table';
import { Station } from './types';

function getStaticScore(station: Station, ageGroup: number, reps: number): number[] {
  const scoreTable = station == Station.PUSHUP ? pushupScoreTable : situpScoreTable;

  /* 
  Get score depending on age group
  */
  const score = scoreTable[ageGroup - 1][reps - 1] | 0;

  /* 
  Get additional reps required for next point
  */
  let nextPointCounter = 0;
  for (const value of scoreTable[ageGroup].slice(reps)) {
    if (value == score) {
      nextPointCounter++;
    } else {
      break;
    }
  }

  return [score, nextPointCounter];
}

export function getPushupScore(ageGroup: number, reps: number) {
  return getStaticScore(Station.PUSHUP, ageGroup, reps);
}
export function getSitupScore(ageGroup: number, reps: number) {
  return getStaticScore(Station.SITUP, ageGroup, reps);
}

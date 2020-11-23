import { stat } from 'fs';
import pushupScoreTable from './data/pushup-score-table';
import situpScoreTable from './data/pushup-score-table';
import { Station } from './types';

function getStaticScore(station: Station, ageGroup: number, reps: number): number[] {
  const scoreTable = station == Station.PUSHUP ? pushupScoreTable : situpScoreTable;

  /*
  Highest score (25 points) is with 60 reps
  */
  if (reps > 60) reps = 60;

  /* 
  Get score depending on age group
  */
  const scoreList = scoreTable[ageGroup - 1];
  const score = scoreList[reps - 1] | 0;

  /* 
  Get additional reps required for next point
  */
  let nextPointCounter = 0;

  for (const value of scoreList.slice(reps - 1)) {
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

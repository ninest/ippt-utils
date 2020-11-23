import { getPushupScore, getSitupScore, getRunScore } from './index';

import { Award, IpptResult } from './types';
import awards from './data/awards';

export default function getIpptScore(
  ageGroup: number,
  pushupReps: number,
  situpReps: number,
  runSeconds: number,
): IpptResult {
  const [pushupScore, pushupsNextScore] = getPushupScore(ageGroup, pushupReps);
  const [situpScore, situpNextScore] = getSitupScore(ageGroup, situpReps);
  const [runScore, runNextScore] = getRunScore(ageGroup, runSeconds);

  const score = pushupScore + situpScore + runScore;

  /* 
  Find award based on total score
  */
  let awardResult: Award;
  for (const award of awards) {
    if (score >= award.minScore) {
      awardResult = award;
      break;
    }
  }

  return {
    pushups: {
      score: pushupScore,
      next: pushupsNextScore,
    },
    situps: {
      score: situpScore,
      next: situpNextScore,
    },
    run: {
      score: runScore,
      next: runNextScore,
    },
    score: score,
    ageGroup: ageGroup,
    award: awardResult!,
  };
}

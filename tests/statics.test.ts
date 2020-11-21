import { getAgeGroup, getPushupScore, getSitupScore } from '../src/index';

/* 
Data from https://www.nyp.edu.sg/content/dam/nyp/campus-life/cca-activities-and-events/ippt/ippt-teststandards.pdf
*/

test.each([
  // age, reps, score
  [20, 1, 0],
  [20, 14, 0],
  [20, 15, 1],
  [20, 45, 21],
])('%p year old, %p pushups = score %p', (age, reps, expectedScore) => {
  const ageGroup = getAgeGroup(age);
  const [score, nextPointReps] = getPushupScore(ageGroup, reps);

  expect(score).toBe(expectedScore);
});

test.each([
  // age, reps, score
  [20, 1, 0],
  [20, 14, 0],
  [20, 15, 1],
  [20, 45, 21],

  [41, 1, 0],
  [41, 1, 0],
  [41, 7, 0],
  [41, 8, 1],
  [41, 45, 22],
])('%p year old, %p situps = score %p', (age, reps, expectedScore) => {
  const ageGroup = getAgeGroup(age);
  const [score, nextPointReps] = getSitupScore(ageGroup, reps);

  expect(score).toBe(expectedScore);
});

import { getAgeGroup, getRunScore } from '../src/index';

test.each([
  // age, seconds, score
  [20, 1200, 0], // 20 minutes
  [20, 900, 12], // 15 minutes
  [20, 510, 50], // 8:30 minutes
])('%p year old, %p seconds run = %p points', (age, seconds, expectedScore) => {
  const ageGroup = getAgeGroup(age);
  const [score, nextPointSeconds] = getRunScore(ageGroup, seconds);

  expect(score).toBe(expectedScore);
});

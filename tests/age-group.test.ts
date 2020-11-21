import { getAgeGroup } from '../src/index';

test.each([
  [18, 1],
  [22, 2],
  [25, 3],
  [31, 5],
  [50, 11],
  [53, 12],
  [57, 13],
  [60, 14],
  [69, 14],
])('A %p year old man is in age group %p', (age, ageGroup) => {
  expect(getAgeGroup(age)).toBe(ageGroup);
});

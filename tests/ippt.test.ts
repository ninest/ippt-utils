import { getAgeGroup, getIpptScore } from '../src/index';

test.each([
  // age, pushups, situps, run seconds, score
  [20, 10, 10, 1000, 0, 'Fail'], // 16:40
  [20, 20, 20, 680, 51, 'Fail'], // 11:20
  [20, 25, 25, 640, 61, 'Pass'], // 10:40
  [20, 30, 30, 550, 73, 'Pass'], // 9:10 – needs confirmation
  [20, 32, 32, 550, 75, 'Silver'], // 9:10 – needs confirmation
])(
  '%p year old, %p pushups, %p situps, %p seconds run = %p score (%p)',
  (age, pushups, situps, runSeconds, expectedScore, expectedAwardName) => {
    const ageGroup = getAgeGroup(age);
    const { score, award } = getIpptScore(ageGroup, pushups, situps, runSeconds);

    expect(score).toBe(expectedScore);
    expect(award.name).toBe(expectedAwardName);
  },
);

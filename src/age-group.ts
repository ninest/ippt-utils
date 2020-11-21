export default function getAgeGroup(age: number): number {
  /* 
  Each age group is 2 years. 
  To get from one age group down to the enxt, you have to 
  minus 3 because each age grup is 2 years inclusive
  */

  let group = 1;

  while (age >= 22) {
    group += 1;
    age -= 3;
  }

  /* 
  Max age group is 14
  */
  if (group > 14) group = 14;

  return group;
}

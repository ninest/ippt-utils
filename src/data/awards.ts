import { Award } from '../types';

const awards: Award[] = [
  {
    name: 'Gold',
    subtitle: 'Commandos, Divers, Guards',
    cash: 500,
    minScore: 90,
  },
  { name: 'Gold', cash: 500, minScore: 85 },
  { name: 'Silver', cash: 300, minScore: 75 },
  { name: 'Pass', subtitle: 'NSMen incentive', minScore: 61 },
  // { name: 'Pass*', subtitle: 'NSMen only', minScore: 51 },
  { name: 'Fail', minScore: 0 },
];
export default awards;

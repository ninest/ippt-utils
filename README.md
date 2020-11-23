<p align="center">
  <img src="https://raw.githubusercontent.com/ninest/ippt-utils/master/assets/ippt-badge.svg" alt="IPPT Gold Badge" width="175" >
</p>
<h1 align="center">IPPT Utils</h1>
<p align="center">Functions to calculate IPPT scores</p>

<p align="center">
  <img src="https://img.shields.io/github/license/ninest/ippt-utils?style=flat-square" alt="MIT" />

  <img alt="npm" src="https://img.shields.io/npm/v/ippt-utils?style=flat-square">

  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/ninest/ippt-utils/Run%20tests?style=flat-square">

  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/ippt-utils?style=flat-square">

  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/ippt-utils?style=flat-square">
</p>

## 📄 Docs

```bash
npm install ippt-utils
```

```js
import {
  getAgeGroup,
  getPushupScore,
  getSitupScore,
  getRunScore,
  getIpptScore,
} from 'ippt-utils';

// ...
// Coming soon
```

### Score tables

All score tables are from [New IPPT Format And Scoring System For The Home Team](https://www.ns.sg/nsp/wcm/connect/9e1e31dc-cc14-46f1-83b2-3246fe2f8bbf/New+IPPT+Format+and+Scoring+System+for+Hometeam.pdf?MOD=AJPERES).

#### Statics

The pushups and situps score table are in the same structure of an array of arrays.

- It is an array of score lists. The first array is the score list of age group 1, the second is for age group 2, and so on.
- The score lists have scores. The index of each element is the number of reps. At age group 14 (the last one), doing 3 pushups gives a score of 2.

```js
// scoreTable is the entire array of arrays as described above
// ageGroup is the age group found from the getAgeGroup method
// reps is the number of pushups or situps
const scoreList = scoreTable[ageGroup - 1];
const score = scoreList[reps - 1];

// Remember that array indexes start with 0
```

If the reps are over 60, the score stays at 25.

#### Run

There is a run score table, and array of arrays, and a run times array.

- Similar to statics, it's an array of score lists. The first array is the score list of age group 1, and so on.
- The score lists have scores corresponding to each timing in runTimes.
- The run times have their own separate array of seconds.

```js
/*
secs is the run time in seconds, for example 1090 seconds
- it must be a multiple of 10
- it must not be more than runTimes[0] or less than the last element of runTimes

Example:
*/
const secs = 1090;

// pos is the position of secs in runTimes
const pos = runTimes.indexOf(secs); // 1

// Now using pos, we can get the score from the score table
const scoreList = runningScoreTable[ageGroup - 1];
const score = scoreList[pos];
```

If the run is faster than 8 minutes, 30 seconds, the score is still 50.

## ⚙️ Build setup

Clone or fork the repository, then run

```bash
npm install

# to runs tests
npm run test -s

# format with prettier
npm run format

# build (convert to JavaScript)
npm run build
```

Run `npm run format` before commiting.

## 📜 License

MIT

export enum Station {
  PUSHUP = 100,
  SITUP = 200,
}

export interface Award {
  name: string;
  minScore: number;
  subtitle?: string;
  cash?: number;
}

export interface IpptResult {
  pushups: {
    score: number;
    next: number;
  };
  situps: {
    score: number;
    next: number;
  };
  run: {
    score: number;
    next: number;
  };
  ageGroup: number;
  score: number;
  award: Award;
}

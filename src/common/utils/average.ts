import { Client } from 'src/models/client';

export const avgAge = (list: Client[]) => {
  return  list.reduce((ac, a) => a.age + ac, 0) / list.length;
};

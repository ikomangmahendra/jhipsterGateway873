import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 8556,
  login: '1i@d\\%YqF5bB\\kjE3r\\AqR\\1l\\TPw',
};

export const sampleWithPartialData: IUser = {
  id: 22640,
  login: 'Hq',
};

export const sampleWithFullData: IUser = {
  id: 14817,
  login: 'XO',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

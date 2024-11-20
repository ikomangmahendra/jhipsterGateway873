import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '73fae674-208e-4e8a-8cca-7d1ee6dd3192',
};

export const sampleWithPartialData: IAuthority = {
  name: '487d27b3-48c8-417b-bf1f-c407be930356',
};

export const sampleWithFullData: IAuthority = {
  name: '1df03746-8fe0-492f-a36f-f9bc0fc142d7',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

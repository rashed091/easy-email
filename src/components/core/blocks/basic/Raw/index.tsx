import { Panel } from './Panel';
import { createInstance } from './createInstance';
import { IBlockData } from '@/typings';
import { BasicType } from '@/constants';

export type IRaw = IBlockData<{

}>;

export const Raw = {
  name: 'Raw',
  type: BasicType.RAW,
  Panel,
  createInstance,
  validChildrenType: [],
};
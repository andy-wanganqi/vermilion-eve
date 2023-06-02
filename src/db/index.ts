import * as local from './local';

//Blueprint Setting
export interface BS {
  //Key
  K: number;
  //Material Effeciency
  M: number;
  //Default Runs
  D: number;
}
export const defaultBS = {
  M: 0,
  D: 1,
};

const db = {
  getBlueprintSettings: local.getBlueprintSettings,
  setBlueprintSettings: local.setBlueprintSettings,
  getBlueprintSetting: local.getBlueprintSetting,
  setBlueprintSetting: local.setBlueprintSetting,
  cacheBlueprintSetting: local.cacheBlueprintSetting,
  saveCachedBlueprintSettings: local.saveCachedBlueprintSettings,
};

export default db;

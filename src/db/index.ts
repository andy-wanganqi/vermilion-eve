import { loadBlueprints } from '../data/blueprints';
import { loadItems } from '../data/items';
import { loadStructureModifications } from '../data/structures';
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
export const defaultBS: BS = {
  K: 0,
  M: 0,
  D: 1,
};

//Structure Modification Setting
export interface SMS {
  //Structure Modification Key
  K: number;
  H: boolean; //1.0
  M: boolean; //0.4
  L: boolean; //0.0
}
//Structure Modification Setting
export interface SS {
  //Structure Key
  K: number;
  //Modifications
  Ms: SMS[];
};
export const defaultSMS: SMS = {
  K: 0,
  H: false,
  M: false,
  L: false,
};

const db = {
  getBlueprintSettings: local.getBlueprintSettings,
  setBlueprintSettings: local.setBlueprintSettings,
  getBlueprintSetting: local.getBlueprintSetting,
  setBlueprintSetting: local.setBlueprintSetting,
  cacheBlueprintSetting: local.cacheBlueprintSetting,
  saveCachedBlueprintSettings: local.saveCachedBlueprintSettings,

  getStructureModificationSettings: local.getStructureModificationSettings,
  setStructureModificationSettings: local.setStructureModificationSettings,
  getStructureModificationSetting: local.getStructureModificationSetting,
  setStructureModificationSetting: local.setStructureModificationSetting,
  cacheStructureModificationSetting: local.cacheStructureModificationSetting,
  saveCachedStructureModificationSettings: local.saveCachedStructureModificationSettings,
};

export const preloadStaticData = () => {
  loadItems();
  loadBlueprints();
  loadStructureModifications();
};

export default db;

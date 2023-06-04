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
export const defaultBS = {
  K: 0,
  M: 0,
  D: 1,
};
//Structure Modification Setting
export interface SMS {
  //Key
  K: number;
  //Modifications
  Ms: number[];
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
};

export const preloadStaticData = () => {
  loadItems();
  loadBlueprints();
  loadStructureModifications();
};

export default db;

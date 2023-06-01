import * as local from './local';

export interface BlueprintSetting {
  materialEfficiency: number;
  defaultRuns: number;
};

export const defaultBlueprintSetting: BlueprintSetting = {
  materialEfficiency: 0,
  defaultRuns: 1,
};

const db = {
  getBlueprintSetting: local.getBlueprintSetting,
  setBlueprintSetting: local.setBlueprintSetting,
};

export default db;

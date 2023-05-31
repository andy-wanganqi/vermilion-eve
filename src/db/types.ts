export interface BlueprintSetting {
  materialEfficiency: number;
  defaultRuns: number;
};

export const defaultBlueprintSetting: BlueprintSetting = {
  materialEfficiency: 0,
  defaultRuns: 1,
};

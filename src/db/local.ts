import { BlueprintSetting, defaultBlueprintSetting } from "./types";

const getBlueprintSettingKey = (id: number) => `bsk${id}`;

export const getBlueprintSetting = (id: number): BlueprintSetting => {
  const key = getBlueprintSettingKey(id);
  const settingStr = localStorage.getItem(key); 
  if (settingStr) {
    const setting = JSON.parse(settingStr) as BlueprintSetting;
    return setting;
  } else {
    return defaultBlueprintSetting;
  }
};

export const setBlueprintSetting = (id: number, setting: BlueprintSetting) => {
  const key = getBlueprintSettingKey(id);
  const settingStr = JSON.stringify(setting);
  localStorage.setItem(key, settingStr); 
};

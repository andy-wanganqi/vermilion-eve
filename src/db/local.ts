import { BS, SMS, defaultBS } from ".";

const BlueprintSettingsKey = "BSsK";
let BSArrayCache: BS[] | null = null;
let BSMapCache = new Map<number, BS>();
const updateBSs = (BSs: BS[]) => {
  BSArrayCache = BSs;
  BSs.forEach((bs)=>{
    BSMapCache.set(bs.K, bs);
  });
}

export const getBlueprintSettings = (): BS[] => {
  if (BSArrayCache) {
    return BSArrayCache;
  }

  const str = localStorage.getItem(BlueprintSettingsKey);
  if (str) {
    BSArrayCache = JSON.parse(str) as BS[];
  }

  return BSArrayCache ?? [];
};

export const setBlueprintSettings = (BSs: BS[]) => {
  if (!BSs) {
    return;
  }

  const filteredSettings = BSs.filter(
    (s) => s.M !== defaultBS.M || s.D !== defaultBS.D
  );
  const filteredSettingsStr = JSON.stringify(filteredSettings);
  localStorage.setItem(BlueprintSettingsKey, filteredSettingsStr);
  updateBSs(filteredSettings);
};

export const getBlueprintSetting = (id: number) => {
  const BSs = getBlueprintSettings();
  const index = BSs?.findIndex((bs) => bs.K === id);
  return index < 0
    ? {
        ...defaultBS,
        K: id,
      }
    : BSs[index];
};

export const setBlueprintSetting = (bs: BS) => {
  const BSs = getBlueprintSettings();
  const index = BSs?.findIndex((a) => a.K === bs.K);
  if (index < 0) {
    BSs.push(bs);
  } else {
    BSs[index] = bs;
  }
  setBlueprintSettings(BSs);
};

export const cacheBlueprintSetting = (bs: BS) => {
  const BSs = getBlueprintSettings();
  const index = BSs?.findIndex((a) => a.K === bs.K);
  if (index < 0) {
    BSs.push(bs);
  } else {
    BSs[index] = bs;
  }
};

export const saveCachedBlueprintSettings = () => {
  if(BSArrayCache){
    setBlueprintSettings(BSArrayCache);
  }
};

const StructureModificationSettingsKey = "SMSsK";
let SMSArrayCache: SMS[] | null = null;

export const getStructureModificationSettings = (): SMS[] => {
  if (SMSArrayCache) {
    return SMSArrayCache;
  }

  const str = localStorage.getItem(StructureModificationSettingsKey);
  if (str) {
    SMSArrayCache = JSON.parse(str) as SMS[];
  }

  return SMSArrayCache ?? [];
};

export const setStructureModificationSettings = (SMSs: SMS[]) => {
  if (!SMSs) {
    return;
  }

  const filteredSettings = SMSs.filter(
    (s) => s.Ms.length > 0
  );
  const filteredSettingsStr = JSON.stringify(filteredSettings);
  localStorage.setItem(StructureModificationSettingsKey, filteredSettingsStr);
};

export const getStructureModificationSetting = (id: number): SMS => {
  const SMSs = getStructureModificationSettings();
  const index = SMSs?.findIndex((sms) => sms.K === id);
  return index < 0
    ? {
        K: id,
        Ms: [],
      }
    : SMSs[index];
};

export const setStructureModificationSetting = (sms: SMS) => {
  const SMSs = getStructureModificationSettings();
  const index = SMSs?.findIndex((a) => a.K === sms.K);
  if (index < 0) {
    SMSs.push(sms);
  } else {
    SMSs[index] = sms;
  }
  setStructureModificationSettings(SMSs);
};

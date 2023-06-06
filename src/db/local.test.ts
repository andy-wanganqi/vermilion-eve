import db, { BS, SMS } from ".";

describe('BlueprintSettingWidget tests', () => {
  const BS0: BS = { K: 9, M: 0, D: 1 };
  const BS1: BS = { K: 1, M: 10, D: 1 };
  const BS2: BS = { K: 2, M: 10, D: 10 };

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('Should setBlueprintSettings() and getBlueprintSettings()', async () => {
    db.setBlueprintSettings([BS0, BS1, BS2]);
    const updatedBSs = db.getBlueprintSettings();
    expect(updatedBSs).toEqual([BS1, BS2]);
  });

  it('Should setBlueprintSetting() and getBlueprintSetting()', async () => {
    db.setBlueprintSettings([BS0, BS1, BS2]);

    const modifiedBS1 = { ...BS1, M: 5};
    db.setBlueprintSetting(modifiedBS1);
    const updatedBS = db.getBlueprintSetting(1);
    expect(updatedBS).toEqual(modifiedBS1);

    const updatedBSs = db.getBlueprintSettings();
    expect(updatedBSs).toEqual([modifiedBS1, BS2]);
  });

  it('Should cacheBlueprintSetting() and saveCachedBlueprintSettings()', async () => {
    db.setBlueprintSettings([BS0, BS1, BS2]);

    const modifiedBS1 = { ...BS1, M: 5};
    db.cacheBlueprintSetting(modifiedBS1);
    db.saveCachedBlueprintSettings();
    const BSs = db.getBlueprintSettings();
    expect(BSs).toEqual([modifiedBS1, BS2]);
  });

  const SMS0: SMS = { K: 9, H: false, M: false, L: false };
  const SMS1: SMS = { K: 1, H: true, M: true, L: true };
  const SMS2: SMS = { K: 2, H: false, M: true, L: false };

  it('Should setStructureModificationSettings() and getStructureModificationSettings()', async () => {
    db.setStructureModificationSettings([SMS0, SMS1, SMS2]);
    const result = db.getStructureModificationSettings();
    expect(result).toEqual([SMS1, SMS2]);
  });

  it('Should setStructureModificationSetting() and getStructureModificationSetting()', async () => {
    db.setStructureModificationSettings([SMS0, SMS1, SMS2]);

    const modifiedSMS1 = { ...SMS1, M: false};
    db.setStructureModificationSetting(modifiedSMS1);
    const updatedSMS = db.getStructureModificationSetting(1);
    expect(updatedSMS).toEqual(modifiedSMS1);
    
    const updatedSMSs = db.getStructureModificationSettings();
    expect(updatedSMSs).toEqual([modifiedSMS1, SMS2]);
  });

  it('Should cacheStructureModificationSetting() and saveCachedStructureModificationSettings()', async () => {
    db.setStructureModificationSettings([SMS0, SMS1, SMS2]);

    const modifiedSMS1 = { ...SMS1, M: false};
    db.cacheStructureModificationSetting(modifiedSMS1);
    db.saveCachedStructureModificationSettings();
    const SMSs = db.getStructureModificationSettings();
    expect(SMSs).toEqual([modifiedSMS1, SMS2]);
  });
});

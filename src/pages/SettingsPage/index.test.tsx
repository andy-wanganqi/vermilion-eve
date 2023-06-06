import React from 'react';
import { render, screen } from '@testing-library/react';
import SettingsPage from '.';
import sinon from 'sinon';
import db, { defaultBS, defaultSMS } from '../../db';

describe('SettingsPage tests', () => { 
  let getBlueprintSettingStub: sinon.SinonStub;
  let getStructureModificationSettingStub: sinon.SinonStub;

  beforeEach(() => {
    getBlueprintSettingStub = sinon.stub(db, 'getBlueprintSetting').callsFake((id) => defaultBS);
    getStructureModificationSettingStub = sinon.stub(db, 'getStructureModificationSetting').callsFake((id) => defaultSMS);
  });

  afterEach(() => {
    getBlueprintSettingStub.restore();
    getStructureModificationSettingStub.restore();
  });
  
  it('Should render SettingsPage', async () => {
    render(<SettingsPage />);
    expect(screen.getByTestId('blueprint-setting-widget-title')).toHaveTextContent(/Blueprint Setting/i);
    expect(screen.getByTestId('structure-modification-setting-widget-title')).toHaveTextContent(/Structure Modification Setting/i);
  });
});

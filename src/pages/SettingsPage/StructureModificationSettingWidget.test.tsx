import React from 'react';
import { render } from '@testing-library/react';
import StructureModificationSettingWidget, { getStructureModificationSettingNodes } from './StructureModificationSettingWidget';
import sinon from 'sinon';
import db, { defaultSMS } from '../../db';

describe('StructureModificationSettingWidget tests', () => {
  let getStructureModificationSettingStub: sinon.SinonStub;

  beforeEach(() => {
    getStructureModificationSettingStub = sinon.stub(db, 'getStructureModificationSetting').callsFake((id) => defaultSMS);
  });

  afterEach(() => {
    getStructureModificationSettingStub.restore();
  });

  it('Should render StructureModificationSettingWidget', async () => {
    render(<StructureModificationSettingWidget />);
  });
});

describe('StructureModificationSettingWidget getStructureModificationSettingNodes() tests', () => {
  let getStructureModificationSettingStub: sinon.SinonStub;

  beforeEach(() => {
    getStructureModificationSettingStub = sinon.stub(db, 'getStructureModificationSetting').callsFake((id) => defaultSMS);
  });

  afterEach(() => {
    getStructureModificationSettingStub.restore();
  });
  
  it('Should get nodes with empty search', () => {
    const nodes = getStructureModificationSettingNodes('', []);
    expect(nodes.treeData[0].title).toBe('Engineering Complexes');
    expect(nodes.treeData[1].title).toBe('Refineries');
  });

  it('Should get nodes with only blueprints', () => {
    const nodes = getStructureModificationSettingNodes('complexes', []);
    expect(nodes.treeData[0].title).toBe('Engineering Complexes');
    expect(nodes.treeData.length).toBe(1);
  });

  it('Should get nodes with only structures', () => {
    const nodes = getStructureModificationSettingNodes('refineries', []);
    expect(nodes.treeData[0].title).toBe('Refineries');
    expect(nodes.treeData.length).toBe(1);
  });
});

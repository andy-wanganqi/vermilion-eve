import React from 'react';
import { render } from '@testing-library/react';
import sinon from 'sinon';
import BlueprintSettingWidget, { getBlueprintSettingNodes } from './BlueprintSettingWidget';
import db, { defaultBS } from '../../db';

describe('BlueprintSettingWidget tests', () => {
  let getBlueprintSettingStub: sinon.SinonStub;

  beforeEach(() => {
    getBlueprintSettingStub = sinon.stub(db, 'getBlueprintSetting').callsFake((id) => defaultBS);
  });

  afterEach(() => {
    getBlueprintSettingStub.restore();
  });
  
  it('Should render BlueprintSettingWidget', async () => {
    render(<BlueprintSettingWidget />);
  });
});

describe('BlueprintSettingWidget getBlueprintSettingNodes() tests', () => {
  let getBlueprintSettingStub: sinon.SinonStub;

  beforeEach(() => {
    getBlueprintSettingStub = sinon.stub(db, 'getBlueprintSetting').callsFake((id) => defaultBS);
  });

  afterEach(() => {
    getBlueprintSettingStub.restore();
  });

  it('Should get nodes with empty search', () => {
    const nodes = getBlueprintSettingNodes('', []);
    expect(nodes.treeData[0].title).toBe('Blueprints');
    expect(nodes.treeData[1].title).toBe('Reaction Formulas');
  });

  it('Should get nodes with only blueprints', () => {
    const nodes = getBlueprintSettingNodes('blueprints', []);
    expect(nodes.treeData[0].title).toBe('Blueprints');
    expect(nodes.treeData.length).toBe(1);
  });

  it('Should get nodes with only structures', () => {
    const nodes = getBlueprintSettingNodes('structures', []);
    expect(nodes.treeData[0].title).toBe('Blueprints');
    expect(nodes.treeData.length).toBe(1);
  });
});

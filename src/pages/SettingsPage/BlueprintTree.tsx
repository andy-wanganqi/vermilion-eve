import React, { useContext, useEffect, useState } from 'react';
import { DownOutlined, FileOutlined } from '@ant-design/icons';
import { Tree } from 'antd';

import { getBlueprintSettingNodes, BlueprintDataNode } from './DataProvider';
import { BlueprintSettingPageContext } from './BlueprintSettingPage';
import { Blueprint } from '../../data/types';

const BlueprintTree: React.FC = () => {
  const { blueprintSettingsVisibility, setBlueprint } = useContext(BlueprintSettingPageContext);
  const initBlueprintSettingNodes: BlueprintDataNode[] = [];
  const [blueprintSettingNodes, setBlueprintSettingNodes] = useState(initBlueprintSettingNodes);

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    const blueprint: Blueprint | null = info.node.blueprint;
    if (blueprint) {
      setBlueprint(blueprint);
    }
  };

  useEffect(() => {
    const nodes = getBlueprintSettingNodes(blueprintSettingsVisibility);
    setBlueprintSettingNodes(nodes);
  }, [blueprintSettingsVisibility]);
  
  return (
    <Tree
      showLine={{ showLeafIcon: <FileOutlined /> }}
      switcherIcon={<DownOutlined />}
      showIcon={false}
      defaultExpandedKeys={['0-0-0']}
      onSelect={onSelect}
      treeData={blueprintSettingNodes}
    />
  )
};

export default BlueprintTree;

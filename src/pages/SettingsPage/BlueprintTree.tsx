import React, { useContext } from 'react';
import { DownOutlined, FileOutlined } from '@ant-design/icons';
import { Tree } from 'antd';

import settingsNodes from './DataProvider';
import { BlueprintSettingPageContext } from './BlueprintSettingPage';
import { Blueprint } from '../../data/types';

const BlueprintTree: React.FC = () => {
  const { setBlueprint } = useContext(BlueprintSettingPageContext);

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    const blueprint: Blueprint | null = info.node.blueprint;
    if (blueprint) {
      setBlueprint(blueprint);
    }
  };
  
  return (
    <Tree
      showLine={{ showLeafIcon: <FileOutlined /> }}
      switcherIcon={<DownOutlined />}
      showIcon={false}
      defaultExpandedKeys={['0-0-0']}
      onSelect={onSelect}
      treeData={settingsNodes}
    />
  )
};

export default BlueprintTree;

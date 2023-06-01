import React, { useContext, useEffect, useState } from "react";
import { DownOutlined, FileOutlined } from "@ant-design/icons";
import { Space, Tree, Input } from "antd";

import { getBlueprintSettingNodes, BlueprintDataNode } from "./DataProvider";
import { BlueprintSettingPageContext } from "./BlueprintSettingPage";
import { Blueprint } from "../../data";
const { Search } = Input;

const BlueprintTree: React.FC = () => {
  const { blueprintSettingsVisibility, setBlueprint } = useContext(
    BlueprintSettingPageContext
  );
  const [searchKeyword, setSearchKeyword] = useState('');
  const initBlueprintSettingNodes: BlueprintDataNode[] = [];
  const [blueprintSettingNodes, setBlueprintSettingNodes] = useState(
    initBlueprintSettingNodes
  );

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    const blueprint: Blueprint | null = info.node.blueprint;
    if (blueprint) {
      setBlueprint(blueprint);
    }
  };

  useEffect(() => {
    const nodes = getBlueprintSettingNodes(searchKeyword, blueprintSettingsVisibility);
    setBlueprintSettingNodes(nodes);
  }, [blueprintSettingsVisibility, searchKeyword]);

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        onSearch={(value: string) => { setSearchKeyword(value); }}
      />
      <Tree
        showLine={{ showLeafIcon: <FileOutlined /> }}
        switcherIcon={<DownOutlined />}
        showIcon={false}
        onSelect={onSelect}
        treeData={blueprintSettingNodes}
      />
    </Space>
  );
};

export default BlueprintTree;

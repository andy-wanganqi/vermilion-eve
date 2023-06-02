import React, { useState } from "react";
import {
  DownOutlined,
  FileOutlined,
  PercentageOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { Space, Tree, Input, InputNumber, Button, message } from "antd";
import { DataNode } from "antd/es/tree";

import { Blueprint, BlueprintGroup, allBlueprintGroups } from "../../data";
import db, { BS } from '../../db';
const { Search } = Input;

type BlueprintDataNodeType = DataNode & { blueprint: Blueprint | null };

interface BlueprintDataNodeTitleProps {
  blueprint: Blueprint;
  blueprintSetting: BS;
}

const BlueprintDataNodeTitle = (props: BlueprintDataNodeTitleProps) => {
  const { blueprint, blueprintSetting } = props;
  const materiaEfficiencyDisabled = !blueprint?.manufacturing;
  const [bs, setBS] = useState(blueprintSetting);
  
  return (
    <Space>
      <span>{blueprint.name}</span>
      <InputNumber
        size="small"
        style={{ width: "120px" }}
        disabled={materiaEfficiencyDisabled}
        addonBefore={<PercentageOutlined />}
        min={0}
        max={10}
        value={bs.M}
        onChange={(value: number | null) => {
          if(value) {
            setBS({...bs, M: value})
          }
        }}
      />
      <InputNumber
        size="small"
        style={{ width: "160px" }}
        addonBefore={<RightCircleOutlined />}
        min={1}
        max={9999999}
        value={bs.D}
        onChange={(value: number | null) => {
          if(value) {
            setBS({...bs, D: value})
          }
        }}
      />
      <Button
        type="primary"
        size="small"
        onClick={() => {
          db.setBlueprintSetting(bs);
          message.success(
            `Successfully saved blueprint setting of ${blueprint.name}`
          );
        }}
      >
        Save
      </Button>
    </Space>
  );
};

const blueprint2DataNode = (blueprint: Blueprint, blueprintSetting: BS): BlueprintDataNodeType => {
  // const setting = db.getBlueprintSetting(blueprint.id);
  const title = <BlueprintDataNodeTitle blueprint={blueprint} blueprintSetting={blueprintSetting} />;

  return {
    title,
    key: blueprint.name,
    blueprint,
  };
};

const blueprintGroup2DataNode = (
  blueprintGroup: BlueprintGroup,
  searchKeyword: string,
  level: number
) => {
  let expandedKeys: (string | number)[] = [];
  let children: BlueprintDataNodeType[] = [];

  if (level <= 2) {
    expandedKeys.push(blueprintGroup.name);
  }

  if (blueprintGroup.subgroups) {
    const refineSearchKeyword =
      searchKeyword === ""
        ? ""
        : blueprintGroup.name.indexOf(searchKeyword) >= 0
        ? ""
        : searchKeyword;
    const subnodes = blueprintGroup.subgroups
      .map((subgroup) =>
        blueprintGroup2DataNode(subgroup, refineSearchKeyword, level + 1)
      )
      .filter(
        (subgroup) =>
          subgroup.dataNode.children && subgroup.dataNode.children.length > 0
      );
    children = children.concat(subnodes.map((node) => node.dataNode));
    if (level <= 2) {
      expandedKeys = expandedKeys.concat(
        subnodes.flatMap((node) => node.expandedKeys)
      );
    }
  }
  if (blueprintGroup.blueprints) {
    const nodes = blueprintGroup.blueprints
      .filter(
        (blueprint) =>
          searchKeyword.trim() === "" ||
          blueprint.name.indexOf(searchKeyword) >= 0
      )
      .map((blueprint) => {
        const blueprintSetting = db.getBlueprintSetting(blueprint.id);
        return blueprint2DataNode(blueprint, blueprintSetting);
      });
    children = children.concat(nodes);
  }

  return {
    dataNode: {
      title: blueprintGroup.name,
      key: blueprintGroup.name,
      children: children,
      blueprint: null,
    },
    expandedKeys,
  };
};

const getBlueprintSettingNodes = (searchKeyword: string) => {
  let expandedKeys: (string | number)[] = [];
  const dataNodes = allBlueprintGroups
    .map((blueprintGroup) =>
      blueprintGroup2DataNode(blueprintGroup, searchKeyword, 0)
    )
    .filter(
      (node) => node.dataNode.children && node.dataNode.children.length > 0
    );
  expandedKeys = expandedKeys.concat(
    dataNodes.flatMap((node) => node.expandedKeys)
  );
  return {
    expandedKeys,
    treeData: dataNodes.map((node) => node.dataNode),
  };
};

const BlueprintSettingWidget: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    // const blueprint: Blueprint | null = info.node.blueprint;
    // if (blueprint) {
    //   navigate(`/settings/blueprint/${blueprint.id}`);
    // }
  };

  const { expandedKeys, treeData } = getBlueprintSettingNodes(searchKeyword);

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        onSearch={(value: string) => {
          setSearchKeyword(value);
        }}
      />
      <Tree
        expandAction={"click"}
        showLine={{ showLeafIcon: <FileOutlined /> }}
        switcherIcon={<DownOutlined />}
        showIcon={false}
        onSelect={onSelect}
        defaultExpandedKeys={expandedKeys}
        treeData={treeData}
      />
    </Space>
  );
};

export default BlueprintSettingWidget;

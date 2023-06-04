import React, { useMemo, useState, useTransition } from "react";
import {
  DownOutlined,
  FileOutlined,
  PercentageOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { Space, Tree, Input, InputNumber, Button, message } from "antd";
import { DataNode } from "antd/es/tree";

import db, { BS } from "../../db";
import {
  Blueprint,
  BlueprintGroup,
  getBlueprintTreeRoots,
} from "../../data/blueprints";
const { Search } = Input;

const EXPAND_LEVEL = 1;

interface BlueprintDataNodeTitleProps {
  blueprint: Blueprint;
  blueprintSetting: BS;
  selected: boolean;
};
const BlueprintDataNodeTitle = (props: BlueprintDataNodeTitleProps) => {
  const { blueprint, blueprintSetting, selected } = props;
  const materiaEfficiencyDisabled = !blueprint?.manufacturing;
  const [bs, setBS] = useState(blueprintSetting);

  return (
    <Space>
      <span>{blueprint.name}</span>
      {selected ? (
        <InputNumber
          size="small"
          style={{ width: "120px" }}
          autoFocus
          disabled={materiaEfficiencyDisabled}
          addonBefore={<PercentageOutlined />}
          min={0}
          max={10}
          value={bs.M}
          onChange={(value: number | null) => {
            if (value) {
              const updateBS = { ...bs, M: value };
              db.cacheBlueprintSetting(updateBS);
              setBS(updateBS);
            }
          }}
        />
      ) : (
        <>
          <PercentageOutlined />
          <span>{bs.M}</span>
        </>
      )}
      {selected ? (
        <InputNumber
          size="small"
          style={{ width: "160px" }}
          addonBefore={<RightCircleOutlined />}
          min={1}
          max={9999999}
          value={bs.D}
          onChange={(value: number | null) => {
            if (value) {
              const updateBS = { ...bs, D: value };
              db.cacheBlueprintSetting(updateBS);
              setBS(updateBS);
            }
          }}
        />
      ) : (
        <>
          <RightCircleOutlined />
          <span>{bs.D}</span>
        </>
      )}
      {selected && (
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
      )}
    </Space>
  );
};

const blueprint2DataNode = (
  blueprint: Blueprint,
  blueprintSetting: BS,
  selectedKeys: React.Key[]
): DataNode => {
  const selected = selectedKeys.findIndex((k) => k === blueprint.id) >= 0;

  const title = (
    <BlueprintDataNodeTitle
      blueprint={blueprint}
      blueprintSetting={blueprintSetting}
      selected={selected}
    />
  );

  return {
    title,
    key: blueprint.id,
  };
};

const blueprintGroup2DataNode = (
  blueprintGroup: BlueprintGroup,
  selectedKeys: React.Key[],
  searchKeyword: string,
  level: number
) => {
  const { name, subgroups, blueprints, formulas} = blueprintGroup;
  let expandedKeys: (string | number)[] = [];
  let children: DataNode[] = [];

  if (level <= EXPAND_LEVEL) {
    expandedKeys.push(name);
  }

  // Work through sub groups
  if (subgroups) {
    const refinedSearchKeyword =
      searchKeyword === ""
        ? ""
        : name.indexOf(searchKeyword) >= 0
        ? ""
        : searchKeyword;
    const subnodes = subgroups
      .map((subgroup) =>
        blueprintGroup2DataNode(
          subgroup,
          selectedKeys,
          refinedSearchKeyword,
          level + 1
        )
      )
      .filter(
        (subgroup) =>
          subgroup.dataNode.children && subgroup.dataNode.children.length > 0
      );
    children = children.concat(subnodes.map((node) => node.dataNode));
    if (level <= EXPAND_LEVEL) {
      expandedKeys = expandedKeys.concat(
        subnodes.flatMap((node) => node.expandedKeys)
      );
    }
  }

  // Work through blueprints or formulas
  let subitems = blueprints;
  if (formulas) {
    subitems = formulas;
  }
  if (subitems) {
    const nodes = subitems
      .filter(
        (blueprint) =>
          searchKeyword.trim() === "" ||
          blueprint.name.indexOf(searchKeyword) >= 0
      )
      .map((blueprint) => {
        const blueprintSetting = db.getBlueprintSetting(blueprint.id);
        return blueprint2DataNode(blueprint, blueprintSetting, selectedKeys);
      });
    children = children.concat(nodes);
  }

  return {
    dataNode: {
      title: name,
      key: name,
      children: children,
      blueprint: null,
    },
    expandedKeys,
  };
};

const getBlueprintSettingNodes = (
  searchKeyword: string,
  selectedKeys: React.Key[]
) => {
  let expandedKeys: (string | number)[] = [];
  const treeRoots = getBlueprintTreeRoots();
  const dataNodes = treeRoots
    .map((group) =>
      blueprintGroup2DataNode(group, selectedKeys, searchKeyword, 0)
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
  const [, startTransition] = useTransition();
  const initKeyword = "";
  const [searchKeyword, setSearchKeyword] = useState(initKeyword);
  const initSelectedKeys: React.Key[] = [];
  const [selectedKeys, setSelectedKeys] = useState(initSelectedKeys);

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    if (selectedKeys.length > 0) {
      startTransition(() => {
        setSelectedKeys(selectedKeys);
      });
    }
  };

  // console.time('getBlueprintSettingNodes');
  const { expandedKeys, treeData } = useMemo(
    () => getBlueprintSettingNodes(searchKeyword, selectedKeys),
    [searchKeyword, selectedKeys]
  );
  // console.timeEnd('getBlueprintSettingNodes');

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

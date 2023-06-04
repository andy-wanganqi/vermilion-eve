import React, { useMemo, useState, useTransition } from "react";
import {
  DownOutlined,
  FileOutlined,
  PercentageOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { Space, Tree, Input } from "antd";

import {
  Structure,
  StructureGroup,
  getStructureModificationTreeRoots,
} from "../../data/structures";
import { DataNode } from "antd/es/tree";
import { Item } from "../../data/items";
import db, { SMS } from "../../db";
const { Search } = Input;

interface ReactorDataNodeTitleProps {
  structureModification: Item;
  sms: SMS;
  selected: boolean;
}
const ReactorDataNodeTitle = (props: ReactorDataNodeTitleProps) => {
  const { structureModification, selected } = props;
  const [sms, setSMS] = useState(props.sms);

  return (
    <Space>
      <span>{structureModification.name}</span>
    </Space>
  );
};

const structureModification2DataNode = (
  structureModification: Item,
  sms: SMS,
  selectedKeys: React.Key[]
) => {
  const selected =
    selectedKeys.findIndex((k) => k === structureModification.id) >= 0;
  const title = (
    <ReactorDataNodeTitle
      structureModification={structureModification}
      sms={sms}
      selected={selected}
    />
  );

  return {
    title,
    key: structureModification.id,
  };
};

const structure2DataNode = (
  structure: Structure,
  selectedKeys: React.Key[],
  searchKeyword: string
) => {
  let children: DataNode[] = [];

  let subitems = structure.reactors;
  if (structure.manufacturings && structure.manufacturings.length > 0) {
    subitems = structure.manufacturings;
  }

  if (subitems) {
    children = subitems
      .filter(
        (blueprint) =>
          searchKeyword.trim() === "" ||
          blueprint.name.indexOf(searchKeyword) >= 0
      )
      .map((sm) => {
        const sms = db.getStructureModificationSetting(structure.structure.id);
        return structureModification2DataNode(sm, sms, selectedKeys);
      });
  }

  const structureDataNode: DataNode = {
    title: structure.structure.name,
    key: structure.structure.name,
    children,
  };

  return structureDataNode;
};

const structureGroup2DataNode = (
  structureGroup: StructureGroup,
  selectedKeys: React.Key[],
  searchKeyword: string
) => {
  const { name, structures } = structureGroup;
  let expandedKeys: (string | number)[] = [name];

  const refinedSearchKeyword =
    searchKeyword === ""
      ? ""
      : name.indexOf(searchKeyword) >= 0
      ? ""
      : searchKeyword;
  const subnodes = structures
    .map((s) => structure2DataNode(s, selectedKeys, refinedSearchKeyword))
    .filter((subgroup) => subgroup.children && subgroup.children.length > 0);

  // expandedKeys = expandedKeys.concat(subnodes.map((node) => node.key));

  return {
    dataNode: {
      title: name,
      key: name,
      children: subnodes,
    },
    expandedKeys,
  };
};

const getStructureModificationSettingNodes = (
  searchKeyword: string,
  selectedKeys: React.Key[]
) => {
  let expandedKeys: (string | number)[] = [];
  const treeRoots = getStructureModificationTreeRoots();
  const dataNodes = treeRoots
    .map((sm) => structureGroup2DataNode(sm, selectedKeys, searchKeyword))
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

const StructureModificationSettingWidget: React.FC = () => {
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

  // console.time('getRefineriesSettingNodes');
  const { expandedKeys, treeData } = useMemo(
    () => getStructureModificationSettingNodes(searchKeyword, selectedKeys),
    [searchKeyword, selectedKeys]
  );
  // console.timeEnd('getRefineriesSettingNodes');

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

export default StructureModificationSettingWidget;

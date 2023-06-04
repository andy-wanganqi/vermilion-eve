import React, { useMemo, useState, useTransition } from "react";
import { DownOutlined, FileOutlined } from "@ant-design/icons";
import { Space, Tree, Input, Checkbox, message, Button } from "antd";

import {
  Structure,
  StructureGroup,
  getStructureModificationTreeRoots,
} from "../../data/structures";
import { DataNode } from "antd/es/tree";
import { Item } from "../../data/items";
import db, { SMS } from "../../db";
import { CheckboxChangeEvent } from "antd/es/checkbox";
const { Search } = Input;

interface StructureModificationDataNodeTitleProps {
  structureModification: Item;
  sms: SMS;
  selected: boolean;
}
const StructureModificationDataNodeTitle = (
  props: StructureModificationDataNodeTitleProps
) => {
  const { structureModification, selected } = props;
  const [sms, setSMS] = useState(props.sms);

  return selected ? (
    <Space>
      <span>{structureModification.name}</span>
      <Checkbox
        checked={sms.H}
        onChange={(e) => {
          const updateSMS = { ...sms, H: !sms.H };
          db.cacheStructureModificationSetting(updateSMS);
          setSMS(updateSMS);
        }}
      >
        <span style={{ color: "#2C74E0" }}>∎ 1.0</span>
      </Checkbox>
      <Checkbox
        checked={sms.M}
        onChange={(e) => {
          const updateSMS = { ...sms, M: !sms.M };
          db.cacheStructureModificationSetting(updateSMS);
          setSMS(updateSMS);
        }}
      >
        <span style={{ color: "#DA6C07" }}>∎ 0.4</span>
      </Checkbox>
      <Checkbox
        checked={sms.L}
        onChange={(e) => {
          const updateSMS = { ...sms, L: !sms.L };
          db.cacheStructureModificationSetting(updateSMS);
          setSMS(updateSMS);
        }}
      >
        <span style={{ color: "#8C3263" }}>∎ 0.0</span>
      </Checkbox>
      <Button
        type="primary"
        size="small"
        onClick={() => {
          db.setStructureModificationSetting(sms);
          message.success(
            `Successfully saved structure modification setting of ${structureModification.name}`
          );
        }}
      >
        Save
      </Button>
    </Space>
  ) : (
    <Space>
      <span>{structureModification.name}</span>
      {sms.H && <span style={{ color: "#2C74E0" }}>∎ 1.0</span>}
      {sms.M && <span style={{ color: "#DA6C07" }}>∎ 0.4</span>}
      {sms.L && <span style={{ color: "#8C3263" }}>∎ 0.0</span>}
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
    <StructureModificationDataNodeTitle
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

  let modifications = structure.reactors;
  if (structure.manufacturings && structure.manufacturings.length > 0) {
    modifications = structure.manufacturings;
  }

  if (modifications) {
    children = modifications
      .filter(
        (blueprint) =>
          searchKeyword.trim() === "" ||
          blueprint.name.indexOf(searchKeyword) >= 0
      )
      .map((modifications) => {
        const sms = db.getStructureModificationSetting(modifications.id);
        return structureModification2DataNode(modifications, sms, selectedKeys);
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

  const onSelect = (
    selectedKeys: React.Key[],
    e: {
      selected: boolean;
      selectedNodes: DataNode[];
      node: DataNode;
      event: string;
    }
  ) => {
    if (selectedKeys.length > 0) {
      startTransition(() => {
        setSelectedKeys(selectedKeys);
      });
    } else {
      setTimeout(() => {
        setSelectedKeys([e.node.key]);
      }, 200);
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

import type { DataNode } from "antd/es/tree";

import { Blueprint, BlueprintGroup } from "../../data/types";
import data from "../../data";
import db from "../../db";
import { ReactNode } from "react";
import { Space } from "antd";
import { PercentageOutlined, RightCircleOutlined } from "@ant-design/icons";

export type BlueprintDataNode = DataNode & { blueprint: Blueprint | null };

const blueprint2DataNode = (blueprint: Blueprint, searchKeyword: string, showSetting: boolean): BlueprintDataNode => {
  let title: ReactNode | string = blueprint.name;
  if(showSetting){
    const setting = db.getBlueprintSetting(blueprint.id);
    title = (
      <Space>
        <span>{blueprint.name}</span>
        <PercentageOutlined /><span>{setting.materialEfficiency}</span>
        <RightCircleOutlined /><span>{setting.defaultRuns}</span>
      </Space>
    );
  }

  return {
    title,
    key: blueprint.name,
    blueprint,
  };
};

const blueprintGroup2DataNode = (folder: BlueprintGroup, searchKeyword: string, showSetting: boolean): BlueprintDataNode => {
  let children: BlueprintDataNode[] = [];
  if (folder.subgroups) {
    const refineSearchKeyword = searchKeyword === '' ? '' : folder.name.indexOf(searchKeyword) >= 0 ? '' : searchKeyword;
    const nodes = folder.subgroups
      .map((subgroup) => blueprintGroup2DataNode(subgroup, refineSearchKeyword, showSetting))
      .filter((subgroup) => subgroup.children && subgroup.children.length > 0)
      ;
    children = children.concat(nodes);
  }
  if (folder.blueprints) {
    const nodes = folder.blueprints
      .filter((subgroup) => searchKeyword.trim() === '' || subgroup.name.indexOf(searchKeyword) >= 0)
      .map((blueprint) => blueprint2DataNode(blueprint, searchKeyword, showSetting));
    children = children.concat(nodes);
  }

  return {
    title: folder.name,
    key: folder.name,
    children: children,
    blueprint: null,
  };
};

export const getBlueprintSettingNodes = (searchKeyword: string, showSetting: boolean) => {
  const { blueprintGroup, reactionGroup } = data;
  let blueprintSettingNodes: BlueprintDataNode[] = [];

  const manufacturingNode = blueprintGroup2DataNode(blueprintGroup, searchKeyword, showSetting);
  if(manufacturingNode.children && manufacturingNode.children.length > 0){
    blueprintSettingNodes.push(manufacturingNode);
  }

  const reactionNode = blueprintGroup2DataNode(reactionGroup, searchKeyword, showSetting);
  if(reactionNode.children && reactionNode.children.length > 0){
    blueprintSettingNodes.push(reactionNode);
  }
  
  return blueprintSettingNodes;
}

import type { DataNode } from "antd/es/tree";

import { Blueprint, BlueprintGroup } from "../../data/types";
import data from "../../data";
import db from "../../db";
import { ReactNode } from "react";
import { Space } from "antd";
import { PercentageOutlined, RightCircleOutlined } from "@ant-design/icons";

export type BlueprintDataNode = DataNode & { blueprint: Blueprint | null };

const blueprint2DataNode = (blueprint: Blueprint, showSetting: boolean): BlueprintDataNode => {
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

const blueprintGroup2DataNode = (folder: BlueprintGroup, showSetting: boolean): BlueprintDataNode => {
  let children: BlueprintDataNode[] = [];
  if (folder.subgroups) {
    children = children.concat(
      folder.subgroups.map((subgroup) => blueprintGroup2DataNode(subgroup, showSetting))
    );
  }
  if (folder.blueprints) {
    children = children.concat(
      folder.blueprints.map((blueprint) => blueprint2DataNode(blueprint, showSetting))
    );
  }

  return {
    title: folder.name,
    key: folder.name,
    children: children,
    blueprint: null,
  };
};

export const getBlueprintSettingNodes = (showSetting: boolean = false) => {
  const { blueprintGroup, reactionGroup } = data;
  let blueprintSettingNodes: BlueprintDataNode[] = [];
  blueprintSettingNodes.push(blueprintGroup2DataNode(blueprintGroup, showSetting));
  blueprintSettingNodes.push(blueprintGroup2DataNode(reactionGroup, showSetting));
  return blueprintSettingNodes;
}

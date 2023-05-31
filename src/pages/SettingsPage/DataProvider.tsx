import type { DataNode } from "antd/es/tree";

import { Blueprint, BlueprintGroup } from "../../data/types";
import data from "../../data";

type BlueprintDataNode = DataNode & { blueprint: Blueprint | null };

const Blueprint2DataNode = (blueprint: Blueprint): BlueprintDataNode => {
  return { title: blueprint.name, key: blueprint.name, blueprint };
};

const BlueprintGroup2DataNode = (folder: BlueprintGroup): BlueprintDataNode => {
  let children: BlueprintDataNode[] = [];
  if (folder.subgroups) {
    children = children.concat(
      folder.subgroups.map((subgroup) => BlueprintGroup2DataNode(subgroup))
    );
  }
  if (folder.blueprints) {
    children = children.concat(
      folder.blueprints.map((blueprint) => Blueprint2DataNode(blueprint))
    );
  }

  return {
    title: folder.name,
    key: folder.name,
    children: children,
    blueprint: null,
  };
};

const { blueprintGroup, reactionGroup } = data;
let settingsNodes: BlueprintDataNode[] = [];
settingsNodes.push(BlueprintGroup2DataNode(blueprintGroup));
settingsNodes.push(BlueprintGroup2DataNode(reactionGroup));

export default settingsNodes;

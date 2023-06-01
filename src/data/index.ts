import blueprintGroup from "./Blueprints";
import reactionGroup from "./ReactionsFormulas";

export interface Item {
  name: string;
  id: number;
}

export interface ItemGroup {
  name: string;
  subgroups: ItemGroup[] | null;
  items: Item[] | null;
}

export interface Material {
  item: Item;
  quantity: number;
}

export interface BlueprintIndustry {
  outcome: Material;
  materials: Material[];
}

export interface Blueprint {
  id: number;
  name: string;
  manufacturing: BlueprintIndustry | null;
  reaction: BlueprintIndustry | null;
}

export interface BlueprintGroup {
  name: string;
  subgroups: BlueprintGroup[] | null;
  blueprints: Blueprint[] | null;
}

export const allBlueprintGroups = [blueprintGroup, reactionGroup];

const findBlueprintFromBlueprints = (
  blueprints: Blueprint[],
  id: number
): Blueprint | null => {
  const index = blueprints.findIndex((blueprint) => blueprint.id === id);
  return index >= 0 ? blueprints[index] : null;
};
const findBlueprintFromBlueprintGroup = (
  blueprintGroup: BlueprintGroup,
  id: number
): Blueprint | null => {
  if (blueprintGroup.subgroups) {
    const blueprint = findBlueprintFromBlueprintGroups(
      blueprintGroup.subgroups,
      id
    );
    if (blueprint) {
      return blueprint;
    }
  }
  if (blueprintGroup.blueprints) {
    return findBlueprintFromBlueprints(blueprintGroup.blueprints, id);
  }
  return null;
};
const findBlueprintFromBlueprintGroups = (
  blueprintGroups: BlueprintGroup[],
  id: number
): Blueprint | null => {
  for (let i = 0; i < blueprintGroups.length; i++) {
    const blueprint = findBlueprintFromBlueprintGroup(blueprintGroups[i], id);
    if (blueprint) {
      return blueprint;
    }
  }
  return null;
};
export const findBlueprint = (id: number): Blueprint | null => {
  return findBlueprintFromBlueprintGroups(allBlueprintGroups, id);
};

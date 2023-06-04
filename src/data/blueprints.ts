import blueprints from "./blueprints.json";
import formulas from "./formulas.json";
import { Item, findItem } from "./items";

interface Data {
  blueprints: RawBlueprintGroup;
  formulas: RawBlueprintGroup;
}
const data: Data = {
  blueprints,
  formulas,
};

interface RawMaterial {
  id: number;
  quantity: number;
}

interface RawBlueprintIndustry {
  outcome: RawMaterial;
  materials: RawMaterial[];
}

interface RawBlueprint {
  id: number;
  name: string;
  cn?: string;
  manufacturing?: RawBlueprintIndustry;
  reaction?: RawBlueprintIndustry;
}

interface RawBlueprintGroup {
  name: string;
  cn?: string;
  subgroups?: RawBlueprintGroup[];
  blueprints?: RawBlueprint[];
  formulas?: RawBlueprint[];
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
  cn?: string;
  manufacturing?: BlueprintIndustry;
  reaction?: BlueprintIndustry;
}

export interface BlueprintGroup {
  name: string;
  cn?: string;
  subgroups?: BlueprintGroup[];
  blueprints?: Blueprint[];
  formulas?: Blueprint[];
}

const convertRawMaterial = (raw: RawMaterial): Material => {
  const item = findItem(raw.id);
  return {
    item,
    quantity: raw.quantity,
  };
};
const convertRawBlueprintIndustry = (
  raw: RawBlueprintIndustry
): BlueprintIndustry => {
  return {
    outcome: convertRawMaterial(raw.outcome),
    materials: raw.materials.map((m) => convertRawMaterial(m)),
  };
};
const convertRawBlueprint = (raw: RawBlueprint): Blueprint => {
  const {
    id,
    name,
    cn,
    manufacturing: rawManufacturing,
    reaction: rawReaction,
  } = raw;
  let manufacturing = undefined;
  if (rawManufacturing) {
    manufacturing = convertRawBlueprintIndustry(rawManufacturing);
  }
  let reaction = undefined;
  if (rawReaction) {
    reaction = convertRawBlueprintIndustry(rawReaction);
  }
  return {
    id,
    name,
    cn,
    manufacturing,
    reaction,
  };
};
const convertRawBlueprintGroup = (raw: RawBlueprintGroup): BlueprintGroup => {
  const {
    name,
    cn,
    subgroups: rawSubgroups,
    blueprints: rawBlueprints,
    formulas: rawFormulas,
  } = raw;
  let subgroups: BlueprintGroup[] | undefined = undefined;
  if (rawSubgroups) {
    subgroups = rawSubgroups.map((r) => convertRawBlueprintGroup(r));
  }
  let blueprints: Blueprint[] | undefined = undefined;
  if (rawBlueprints) {
    blueprints = rawBlueprints.map((r) => convertRawBlueprint(r));
  }
  let formulas: Blueprint[] | undefined = undefined;
  if (rawFormulas) {
    formulas = rawFormulas.map((r) => convertRawBlueprint(r));
  }

  return {
    name,
    cn,
    subgroups,
    blueprints,
    formulas,
  };
};

let blueprintMap = new Map<number, Blueprint>();
let blueprintTreeRoots: BlueprintGroup[] = [];
const putBlueprintsToMap = (blueprints: Blueprint[]) => {
  blueprints.forEach((blueprint) => {
    blueprintMap.set(blueprint.id, blueprint);
  });
};
const putBlueprintGroupToMap = (
  blueprintGroup: BlueprintGroup
) => {
  if (blueprintGroup.blueprints) {
    putBlueprintsToMap(blueprintGroup.blueprints);
  }
  if (blueprintGroup.subgroups) {
    blueprintGroup.subgroups.forEach((subgroup) => {
      putBlueprintGroupToMap(subgroup);
    });
  }
};
export const loadBlueprints = () => {
  if (blueprintTreeRoots.length > 0) {
    return;
  }

  const blueprints = convertRawBlueprintGroup(data.blueprints);
  const formulas = convertRawBlueprintGroup(data.formulas);
  putBlueprintGroupToMap(blueprints);
  putBlueprintGroupToMap(formulas);
  blueprintTreeRoots.push(blueprints);
  blueprintTreeRoots.push(formulas);
};
export const findBlueprint = (id: number): Blueprint => {
  if (blueprintMap.has(id)) {
    return blueprintMap.get(id) as Blueprint;
  }
  throw Error(`Cannot find blueprint with id: ${id}`);
};
export const getBlueprintTreeRoots = () => blueprintTreeRoots;

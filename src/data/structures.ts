import { Item, findItem } from "./items";
import rawComplexes from './engineering-complexes.json';
import rawRefineries from './refineries.json';

export interface RawStructure {
  id: number;
  reactors?: number[];
  manufacturings?: number[];
}
export interface RawStructureGroup {
  name: string;
  structures: RawStructure[];
}

export interface Structure {
  structure: Item;
  reactors?: Item[];
  manufacturings?: Item[];
}

export interface StructureGroup {
  name: string;
  structures: Structure[];
}

const convertRawStructure = (raw: RawStructure): Structure => {
  const { id, reactors: rawReactors, manufacturings: rawManufacturings } = raw;
  const structure = findItem(id);

  let reactors: Item[] = [];
  let manufacturings: Item[] = [];
  if (rawReactors) {
    reactors = rawReactors.map((r) => findItem(r));
  }
  if (rawManufacturings) {
    manufacturings = rawManufacturings.map((r) => findItem(r));
  }

  return {
    structure,
    reactors,
    manufacturings,
  };
};

const convertRawStructureGroup = (raw: RawStructureGroup): StructureGroup => {
  const { name, structures: rawStructures } = raw;

  const structures = rawStructures.map((r) => convertRawStructure(r));
  return {
    name,
    structures,
  };
};

let structureModificationTreeRoots: StructureGroup[] = [];
export const loadStructureModifications = () => {
  if (structureModificationTreeRoots.length > 0) {
    return;
  }

  const complexes = convertRawStructureGroup(rawComplexes);
  const refineries = convertRawStructureGroup(rawRefineries);
  structureModificationTreeRoots.push(complexes);
  structureModificationTreeRoots.push(refineries);
};
//find
export const getStructureModificationTreeRoots = () =>
  structureModificationTreeRoots;

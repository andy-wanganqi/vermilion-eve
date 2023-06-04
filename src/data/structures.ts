import { Item, findItem } from "./items";

export interface RawStructure {
  id: number;
  reactors?: number[];
  manufacturings?: number[];
}
export interface RawStructureGroup {
  name: string;
  structures: RawStructure[];
}

const rawRefineries: RawStructureGroup = {
  name: "Refineris",
  structures: [
    {
      id: 35836, //Tatara
      reactors: [
        46496, //Standup L-Set Reactor Efficiency I
        46497, //Standup L-Set Reactor Efficiency II
      ],
    },
    {
      id: 35835, //Athanor
      reactors: [
        46486, //Standup M-Set Composite Reactor Material Efficiency I
        46487, //Standup M-Set Composite Reactor Material Efficiency II
        46484, //Standup M-Set Composite Reactor Time Efficiency I
        46485, //Standup M-Set Composite Reactor Time Efficiency II
        46490, //Standup M-Set Hybrid Reactor Material Efficiency I
        46491, //Standup M-Set Hybrid Reactor Material Efficiency II
        46488, //Standup M-Set Hybrid Reactor Time Efficiency I
        46489, //Standup M-Set Hybrid Reactor Time Efficiency II
        46494, //Standup M-Set Biochemical Reactor Material Efficiency I
        46495, //Standup M-Set Biochemical Reactor Material Efficiency II
        46492, //Standup M-Set Biochemical Reactor Time Efficiency I
        46493, //Standup M-Set Biochemical Reactor Time Efficiency II
      ],
    },
  ],
};

const rawComplexes: RawStructureGroup = {
  name: "Engineering Complexes",
  structures: [
    {
      id: 35827, //Sotiyo
      manufacturings: [
        37178, //Standup XL-Set Equipment and Consumable Manufacturing Efficiency I
        37179, //Standup XL-Set Equipment and Consumable Manufacturing Efficiency II
        37180, //Standup XL-Set Ship Manufacturing Efficiency I
        37181, //Standup XL-Set Ship Manufacturing Efficiency II
        43704, //Standup XL-Set Structure and Component Manufacturing Efficiency I
        43705, //Standup XL-Set Structure and Component Manufacturing Efficiency II
        45548, //Standup XL-Set Thukker Structure and Component Manufacturing Efficiency
      ],
    },
    {
      id: 35826, //Azbel
      manufacturings: [
        37174, //Standup L-Set Advanced Component Manufacturing Efficiency I
        37175, //Standup L-Set Advanced Component Manufacturing Efficiency II
        37168, //Standup L-Set Advanced Large Ship Manufacturing Efficiency I
        37169, //Standup L-Set Advanced Large Ship Manufacturing Efficiency II
        43709, //Standup L-Set Advanced Medium Ship Manufacturing Efficiency I
        43711, //Standup L-Set Advanced Medium Ship Manufacturing Efficiency II
        43707, //Standup L-Set Advanced Small Ship Manufacturing Efficiency I
        43708, //Standup L-Set Advanced Small Ship Manufacturing Efficiency II
        37164, //Standup L-Set Ammunition Manufacturing Efficiency I
        37165, //Standup L-Set Ammunition Manufacturing Efficiency II
        43718, //Standup L-Set Basic Capital Component Manufacturing Efficiency I
        43719, //Standup L-Set Basic Capital Component Manufacturing Efficiency II
        37166, //Standup L-Set Basic Large Ship Manufacturing Efficiency I
        37167, //Standup L-Set Basic Large Ship Manufacturing Efficiency II
        43716, //Standup L-Set Basic Medium Ship Manufacturing Efficiency I
        43717, //Standup L-Set Basic Medium Ship Manufacturing Efficiency II
        43714, //Standup L-Set Basic Small Ship Manufacturing Efficiency I
        43715, //Standup L-Set Basic Small Ship Manufacturing Efficiency II
        37173, //Standup L-Set Capital Ship Manufacturing Efficiency I
        37172, //Standup L-Set Capital Ship Manufacturing Efficiency II
        43712, //Standup L-Set Drone and Fighter Manufacturing Efficiency I
        43713, //Standup L-Set Drone and Fighter Manufacturing Efficiency II
        37170, //Standup L-Set Equipment Manufacturing Efficiency I
        37171, //Standup L-Set Equipment Manufacturing Efficiency II
        43720, //Standup L-Set Structure Manufacturing Efficiency I
        43721, //Standup L-Set Structure Manufacturing Efficiency II
        45641, //Standup L-Set Thukker Advanced Component Manufacturing Efficiency
        45546, //Standup L-Set Thukker Basic Capital Component Manufacturing Efficiency
      ],
    },
    {
      id: 35825, //Raitaru
      manufacturings: [
        43867, //Standup M-Set Advanced Component Manufacturing Material Efficiency I
        43866, //Standup M-Set Advanced Component Manufacturing Material Efficiency II
        43869, //Standup M-Set Advanced Component Manufacturing Time Efficiency I
        43868, //Standup M-Set Advanced Component Manufacturing Time Efficiency II
        43862, //Standup M-Set Advanced Large Ship Manufacturing Material Efficiency I
        43863, //Standup M-Set Advanced Large Ship Manufacturing Material Efficiency II
        43865, //Standup M-Set Advanced Large Ship Manufacturing Time Efficiency I
        43864, //Standup M-Set Advanced Large Ship Manufacturing Time Efficiency II
        43858, //Standup M-Set Advanced Medium Ship Manufacturing Material Efficiency I
        43859, //Standup M-Set Advanced Medium Ship Manufacturing Material Efficiency II
        43860, //Standup M-Set Advanced Medium Ship Manufacturing Time Efficiency I
        43861, //Standup M-Set Advanced Medium Ship Manufacturing Time Efficiency II
        43855, //Standup M-Set Advanced Small Ship Manufacturing Material Efficiency I
        43854, //Standup M-Set Advanced Small Ship Manufacturing Material Efficiency II
        43856, //Standup M-Set Advanced Small Ship Manufacturing Time Efficiency I
        43857, //Standup M-Set Advanced Small Ship Manufacturing Time Efficiency II
        37158, //Standup M-Set Ammunition Manufacturing Material Efficiency I
        37159, //Standup M-Set Ammunition Manufacturing Material Efficiency II
        37150, //Standup M-Set Ammunition Manufacturing Time Efficiency I
        37151, //Standup M-Set Ammunition Manufacturing Time Efficiency II
        43870, //Standup M-Set Basic Capital Component Manufacturing Material Efficiency I
        43871, //Standup M-Set Basic Capital Component Manufacturing Material Efficiency II
        43872, //Standup M-Set Basic Capital Component Manufacturing Time Efficiency I
        43873, //Standup M-Set Basic Capital Component Manufacturing Time Efficiency II
        43732, //Standup M-Set Basic Large Ship Manufacturing Material Efficiency I
        37152, //Standup M-Set Basic Large Ship Manufacturing Material Efficiency II
        43733, //Standup M-Set Basic Large Ship Manufacturing Time Efficiency I
        43734, //Standup M-Set Basic Large Ship Manufacturing Time Efficiency II
        37146, //Standup M-Set Basic Medium Ship Manufacturing Material Efficiency I
        37147, //Standup M-Set Basic Medium Ship Manufacturing Material Efficiency II
        43919, //Standup M-Set Basic Medium Ship Manufacturing Time Efficiency I
        37153, //Standup M-Set Basic Medium Ship Manufacturing Time Efficiency II
        37154, //Standup M-Set Basic Small Ship Manufacturing Material Efficiency I
        37155, //Standup M-Set Basic Small Ship Manufacturing Material Efficiency II
        37162, //Standup M-Set Basic Small Ship Manufacturing Time Efficiency I
        37163, //Standup M-Set Basic Small Ship Manufacturing Time Efficiency II
        37156, //Standup M-Set Drone and Fighter Manufacturing Material Efficiency I
        37157, //Standup M-Set Drone and Fighter Manufacturing Material Efficiency II
        37148, //Standup M-Set Drone and Fighter Manufacturing Time Efficiency I
        37149, //Standup M-Set Drone and Fighter Manufacturing Time Efficiency II
        43920, //Standup M-Set Equipment Manufacturing Material Efficiency I
        43921, //Standup M-Set Equipment Manufacturing Material Efficiency II
        37160, //Standup M-Set Equipment Manufacturing Time Efficiency I
        37161, //Standup M-Set Equipment Manufacturing Time Efficiency II
        43875, //Standup M-Set Structure Manufacturing Material Efficiency I
        43874, //Standup M-Set Structure Manufacturing Material Efficiency II
        43876, //Standup M-Set Structure Manufacturing Time Efficiency I
        43877, //Standup M-Set Structure Manufacturing Time Efficiency II
        45640, //Standup M-Set Thukker Advanced Component Manufacturing Material Efficiency
        45544, //Standup M-Set Thukker Basic Capital Component Manufacturing Material Efficiency
      ],
    },
  ],
};

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

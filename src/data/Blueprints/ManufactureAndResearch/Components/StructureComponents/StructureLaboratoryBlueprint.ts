import { Blueprint } from "../../../../types";
import {
  Tritanium,
  Pyerite,
  Mexallon,
  Isogen,
  Nocxium,
  Zydrine,
  Megacyte,
} from "../../../../Items/ManufactureAndResearch/Materials/Minerals";
import {
  IntegrityResponseDrones,
  NanoFactory,
  RecursiveComputingModule,
  SterileConduits,
  WetwareMainframe,
} from "../../../../Items/ManufactureAndResearch/Materials/PlanetaryMaterials/AdvancedPlanetaryMaterials";
import { StructureLaboratory } from "../../../../Items/ManufactureAndResearch/Components/StructureComponents";

const StructureLaboratoryBlueprint: Blueprint = {
  id: 21954,
  name: "Structure Laboratory Blueprint", //建筑实验室蓝图
  manufacturing: {
    outcome: {
      item: StructureLaboratory,
      quantity: 1,
    },
    materials: [
      { item: Tritanium, quantity: 1000000 },
      { item: Pyerite, quantity: 200000 },
      { item: Mexallon, quantity: 70000 },
      { item: Isogen, quantity: 8000 },
      { item: Nocxium, quantity: 1500 },
      { item: Zydrine, quantity: 700 },
      { item: Megacyte, quantity: 300 },
      { item: IntegrityResponseDrones, quantity: 10 },
      { item: NanoFactory, quantity: 5 },
      { item: RecursiveComputingModule, quantity: 5 },
      { item: SterileConduits, quantity: 10 },
      { item: WetwareMainframe, quantity: 5 },
    ],
  },
  reaction: null,
};

export default StructureLaboratoryBlueprint;

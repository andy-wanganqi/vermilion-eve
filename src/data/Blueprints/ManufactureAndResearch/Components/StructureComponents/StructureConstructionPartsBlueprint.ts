import { Blueprint } from "../../../..";
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
  OrganicMortarApplicators,
  RecursiveComputingModule,
  SelfHarmonizingPowerCore,
  SterileConduits,
} from "../../../../Items/ManufactureAndResearch/Materials/PlanetaryMaterials/AdvancedPlanetaryMaterials";
import { StructureConstructionParts } from "../../../../Items/ManufactureAndResearch/Components/StructureComponents";

const StructureConstructionPartsBlueprint: Blueprint = {
  id: 21948,
  name: "Structure Construction Parts", //建筑建造组件蓝图
  manufacturing: {
    outcome: {
      item: StructureConstructionParts,
      quantity: 1,
    },
    materials: [
      { item: Tritanium, quantity: 500000 },
      { item: Pyerite, quantity: 100000 },
      { item: Mexallon, quantity: 35000 },
      { item: Isogen, quantity: 4000 },
      { item: Nocxium, quantity: 750 },
      { item: Zydrine, quantity: 350 },
      { item: Megacyte, quantity: 150 },
      { item: IntegrityResponseDrones, quantity: 3 },
      { item: NanoFactory, quantity: 5 },
      { item: OrganicMortarApplicators, quantity: 5 },
      { item: RecursiveComputingModule, quantity: 3 },
      { item: SelfHarmonizingPowerCore, quantity: 3 },
      { item: SterileConduits, quantity: 3 },
    ],
  },
  reaction: null,
};

export default StructureConstructionPartsBlueprint;

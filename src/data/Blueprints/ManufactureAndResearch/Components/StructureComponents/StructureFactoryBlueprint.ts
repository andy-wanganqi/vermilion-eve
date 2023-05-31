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
  BroadcastNode,
  NanoFactory,
  OrganicMortarApplicators,
  RecursiveComputingModule,
  SelfHarmonizingPowerCore,
} from "../../../../Items/ManufactureAndResearch/Materials/PlanetaryMaterials/AdvancedPlanetaryMaterials";
import { StructureFactory } from "../../../../Items/ManufactureAndResearch/Components/StructureComponents";

const StructureFactoryBlueprint: Blueprint = {
  id: 21956,
  name: "Structure Factory Blueprint", //建筑工厂蓝图
  manufacturing: {
    outcome: {
      item: StructureFactory,
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
      { item: BroadcastNode, quantity: 5 },
      { item: NanoFactory, quantity: 10 },
      { item: OrganicMortarApplicators, quantity: 10 },
      { item: RecursiveComputingModule, quantity: 5 },
      { item: SelfHarmonizingPowerCore, quantity: 5 },
    ],
  },
  reaction: null,
};

export default StructureFactoryBlueprint;

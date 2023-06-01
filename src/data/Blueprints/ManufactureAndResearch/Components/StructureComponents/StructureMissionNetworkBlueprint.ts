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
  BroadcastNode,
  NanoFactory,
  OrganicMortarApplicators,
  RecursiveComputingModule,
  SelfHarmonizingPowerCore,
  SterileConduits,
  WetwareMainframe,
} from "../../../../Items/ManufactureAndResearch/Materials/PlanetaryMaterials/AdvancedPlanetaryMaterials";
import { StructureMissionNetwork } from "../../../../Items/ManufactureAndResearch/Components/StructureComponents";

const StructureMissionNetworkBlueprint: Blueprint = {
  id: 21970,
  name: "Structure Mission Network Blueprint", //建筑任务网络蓝图
  manufacturing: {
    outcome: {
      item: StructureMissionNetwork,
      quantity: 1,
    },
    materials: [
      { item: Tritanium, quantity: 1500000 },
      { item: Pyerite, quantity: 300000 },
      { item: Mexallon, quantity: 105000 },
      { item: Isogen, quantity: 12000 },
      { item: Nocxium, quantity: 2250 },
      { item: Zydrine, quantity: 1050 },
      { item: Megacyte, quantity: 450 },
      { item: BroadcastNode, quantity: 15 },
      { item: NanoFactory, quantity: 15 },
      { item: OrganicMortarApplicators, quantity: 10 },
      { item: RecursiveComputingModule, quantity: 10 },
      { item: SelfHarmonizingPowerCore, quantity: 5 },
      { item: SterileConduits, quantity: 10 },
      { item: WetwareMainframe, quantity: 5 },
    ],
  },
  reaction: null,
};

export default StructureMissionNetworkBlueprint;

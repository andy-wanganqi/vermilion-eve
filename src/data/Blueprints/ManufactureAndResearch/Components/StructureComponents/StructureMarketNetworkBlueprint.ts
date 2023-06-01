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
import { StructureMarketNetwork } from "../../../../Items/ManufactureAndResearch/Components/StructureComponents";

const StructureMarketNetworkBlueprint: Blueprint = {
  id: 21964,
  name: "Structure Market Network Blueprint", //建筑市场网络蓝图
  manufacturing: {
    outcome: {
      item: StructureMarketNetwork,
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
      { item: NanoFactory, quantity: 10 },
      { item: OrganicMortarApplicators, quantity: 10 },
      { item: RecursiveComputingModule, quantity: 5 },
      { item: SelfHarmonizingPowerCore, quantity: 5 },
      { item: SterileConduits, quantity: 15 },
      { item: WetwareMainframe, quantity: 10 },
    ],
  },
  reaction: null,
};

export default StructureMarketNetworkBlueprint;

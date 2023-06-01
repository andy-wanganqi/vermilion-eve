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
  RecursiveComputingModule,
  SelfHarmonizingPowerCore,
  SterileConduits,
  WetwareMainframe,
} from "../../../../Items/ManufactureAndResearch/Materials/PlanetaryMaterials/AdvancedPlanetaryMaterials";
import { StructureHangarArray } from "../../../../Items/ManufactureAndResearch/Components/StructureComponents";

const StructureHangarArrayBlueprint: Blueprint = {
  id: 21950,
  name: "Structure Hangar Array Blueprint", //建筑机库阵列蓝图
  manufacturing: {
    outcome: {
      item: StructureHangarArray,
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
      { item: BroadcastNode, quantity: 3 },
      { item: NanoFactory, quantity: 5 },
      { item: RecursiveComputingModule, quantity: 3 },
      { item: SelfHarmonizingPowerCore, quantity: 3 },
      { item: SterileConduits, quantity: 3 },
      { item: WetwareMainframe, quantity: 5 },
    ],
  },
  reaction: null,
};

export default StructureHangarArrayBlueprint;

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
  IntegrityResponseDrones,
  NanoFactory,
  OrganicMortarApplicators,
  SterileConduits,
  WetwareMainframe,
} from "../../../../Items/ManufactureAndResearch/Materials/PlanetaryMaterials/AdvancedPlanetaryMaterials";
import { StructureStorageBay } from "../../../../Items/ManufactureAndResearch/Components/StructureComponents";

const StructureStorageBayBlueprint: Blueprint = {
  id: 21952,
  name: "Structure Storage Bay Blueprint", //建筑贮藏舱蓝图
  manufacturing: {
    outcome: {
      item: StructureStorageBay,
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
      { item: BroadcastNode, quantity: 5 },
      { item: IntegrityResponseDrones, quantity: 3 },
      { item: NanoFactory, quantity: 3 },
      { item: OrganicMortarApplicators, quantity: 3 },
      { item: SterileConduits, quantity: 3 },
      { item: WetwareMainframe, quantity: 5 },
    ],
  },
  reaction: null,
};

export default StructureStorageBayBlueprint;

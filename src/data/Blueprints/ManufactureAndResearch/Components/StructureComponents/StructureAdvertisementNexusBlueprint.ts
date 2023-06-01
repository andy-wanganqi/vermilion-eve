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
  IntegrityResponseDrones,
  RecursiveComputingModule,
  SelfHarmonizingPowerCore,
  WetwareMainframe,
} from "../../../../Items/ManufactureAndResearch/Materials/PlanetaryMaterials/AdvancedPlanetaryMaterials";
import { StructureAdvertisementNexus } from "../../../../Items/ManufactureAndResearch/Components/StructureComponents";

const StructureAdvertisementNexusBlueprint: Blueprint = {
  id: 36955,
  name: "Structure Advertisement Nexus Blueprint", //建筑宣传节点蓝图
  manufacturing: {
    outcome: {
      item: StructureAdvertisementNexus,
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
      { item: BroadcastNode, quantity: 10 },
      { item: IntegrityResponseDrones, quantity: 10 },
      { item: RecursiveComputingModule, quantity: 5 },
      { item: SelfHarmonizingPowerCore, quantity: 5 },
      { item: WetwareMainframe, quantity: 5 },
    ],
  },
  reaction: null,
};

export default StructureAdvertisementNexusBlueprint;

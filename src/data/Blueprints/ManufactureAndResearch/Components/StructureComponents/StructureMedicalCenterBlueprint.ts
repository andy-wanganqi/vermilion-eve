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
  RecursiveComputingModule,
  SelfHarmonizingPowerCore,
  SterileConduits,
  WetwareMainframe,
} from "../../../../Items/ManufactureAndResearch/Materials/PlanetaryMaterials/AdvancedPlanetaryMaterials";
import { StructureMedicalCenter } from "../../../../Items/ManufactureAndResearch/Components/StructureComponents";

const StructureMedicalCenterBlueprint: Blueprint = {
  id: 21966,
  name: "Structure Medical Center Blueprint", //建筑医疗中心蓝图
  manufacturing: {
    outcome: {
      item: StructureMedicalCenter,
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
      { item: IntegrityResponseDrones, quantity: 5 },
      { item: RecursiveComputingModule, quantity: 3 },
      { item: SelfHarmonizingPowerCore, quantity: 3 },
      { item: SterileConduits, quantity: 3 },
      { item: WetwareMainframe, quantity: 5 },
    ],
  },
  reaction: null,
};

export default StructureMedicalCenterBlueprint;

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
  OrganicMortarApplicators,
  RecursiveComputingModule,
  SelfHarmonizingPowerCore,
  SterileConduits,
  WetwareMainframe,
} from "../../../../Items/ManufactureAndResearch/Materials/PlanetaryMaterials/AdvancedPlanetaryMaterials";
import { StructureAccelerationCoils } from "../../../../Items/ManufactureAndResearch/Components/StructureComponents";

const StructureAccelerationCoilsBlueprint: Blueprint = {
  id: 36954,
  name: "Structure Acceleration Coils Blueprint", //建筑加速线圈蓝图
  manufacturing: {
    outcome: {
      item: StructureAccelerationCoils,
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
      { item: BroadcastNode, quantity: 5 },
      { item: IntegrityResponseDrones, quantity: 15 },
      { item: OrganicMortarApplicators, quantity: 10 },
      { item: RecursiveComputingModule, quantity: 10 },
      { item: SelfHarmonizingPowerCore, quantity: 15 },
      { item: SterileConduits, quantity: 5 },
      { item: WetwareMainframe, quantity: 10 },
    ],
  },
  reaction: null,
};

export default StructureAccelerationCoilsBlueprint;

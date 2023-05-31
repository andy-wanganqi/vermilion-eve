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
  OrganicMortarApplicators,
  RecursiveComputingModule,
  SelfHarmonizingPowerCore,
  SterileConduits,
} from "../../../../Items/ManufactureAndResearch/Materials/PlanetaryMaterials/AdvancedPlanetaryMaterials";
import { StructureOfficeCenter } from "../../../../Items/ManufactureAndResearch/Components/StructureComponents";

const StructureOfficeCenterBlueprint: Blueprint = {
  id: 21968,
  name: "Structure Office Center Blueprint", //建筑办公室中心蓝图
  manufacturing: {
    outcome: {
      item: StructureOfficeCenter,
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
      { item: OrganicMortarApplicators, quantity: 5 },
      { item: RecursiveComputingModule, quantity: 3 },
      { item: SelfHarmonizingPowerCore, quantity: 3 },
      { item: SterileConduits, quantity: 3 },
    ],
  },
  reaction: null,
};

export default StructureOfficeCenterBlueprint;

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
  WetwareMainframe,
} from "../../../../Items/ManufactureAndResearch/Materials/PlanetaryMaterials/AdvancedPlanetaryMaterials";
import { StructureDockingBay } from "../../../../Items/ManufactureAndResearch/Components/StructureComponents";

const StructureDockingBayBlueprint: Blueprint = {
  id: 21962,
  name: "Structure Docking Bay Blueprint", //建筑停泊港蓝图
  manufacturing: {
    outcome: {
      item: StructureDockingBay,
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
      { item: IntegrityResponseDrones, quantity: 3 },
      { item: OrganicMortarApplicators, quantity: 3 },
      { item: RecursiveComputingModule, quantity: 5 },
      { item: SelfHarmonizingPowerCore, quantity: 5 },
      { item: WetwareMainframe, quantity: 3 },
    ],
  },
  reaction: null,
};

export default StructureDockingBayBlueprint;

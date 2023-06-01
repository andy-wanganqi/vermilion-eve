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
  NanoFactory,
  OrganicMortarApplicators,
  SelfHarmonizingPowerCore,
  SterileConduits,
  WetwareMainframe,
} from "../../../../Items/ManufactureAndResearch/Materials/PlanetaryMaterials/AdvancedPlanetaryMaterials";
import { StructureReprocessingPlant } from "../../../../Items/ManufactureAndResearch/Components/StructureComponents";

const StructureReprocessingPlantBlueprint: Blueprint = {
  id: 21960,
  name: "Structure Reprocessing Plant Blueprint", //建筑提炼工厂蓝图
  manufacturing: {
    outcome: {
      item: StructureReprocessingPlant,
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
      { item: NanoFactory, quantity: 5 },
      { item: OrganicMortarApplicators, quantity: 10 },
      { item: SelfHarmonizingPowerCore, quantity: 10 },
      { item: SterileConduits, quantity: 5 },
      { item: WetwareMainframe, quantity: 5 },
    ],
  },
  reaction: null,
};

export default StructureReprocessingPlantBlueprint;

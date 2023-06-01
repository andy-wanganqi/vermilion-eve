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
  NanoFactory,
  RecursiveComputingModule,
  SelfHarmonizingPowerCore,
  SterileConduits,
  WetwareMainframe,
} from "../../../../Items/ManufactureAndResearch/Materials/PlanetaryMaterials/AdvancedPlanetaryMaterials";
import { StructureElectromagneticSensor } from "../../../../Items/ManufactureAndResearch/Components/StructureComponents";

const StructureElectromagneticSensorBlueprint: Blueprint = {
  id: 36953,
  name: "Structure Electromagnetic Sensor Blueprint", //建筑磁力感应器蓝图
  manufacturing: {
    outcome: {
      item: StructureElectromagneticSensor,
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
      { item: NanoFactory, quantity: 10 },
      { item: RecursiveComputingModule, quantity: 10 },
      { item: SelfHarmonizingPowerCore, quantity: 10 },
      { item: SterileConduits, quantity: 5 },
      { item: WetwareMainframe, quantity: 15 },
    ],
  },
  reaction: null,
};

export default StructureElectromagneticSensorBlueprint;

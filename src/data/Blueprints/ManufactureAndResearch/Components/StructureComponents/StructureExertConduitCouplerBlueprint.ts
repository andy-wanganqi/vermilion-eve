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
import { RecursiveComputingModule } from "../../../../Items/ManufactureAndResearch/Materials/PlanetaryMaterials/AdvancedPlanetaryMaterials";
import { StructureExertConduitCoupler } from "../../../../Items/ManufactureAndResearch/Components/StructureComponents";

const StructureExertConduitCouplerBlueprint: Blueprint = {
  id: 49721,
  name: "Structure Exert ConduitCoupler Blueprint", //建筑导管联结器蓝图
  manufacturing: {
    outcome: {
      item: StructureExertConduitCoupler,
      quantity: 1,
    },
    materials: [
      { item: Tritanium, quantity: 800000 },
      { item: Pyerite, quantity: 400000 },
      { item: Mexallon, quantity: 90000 },
      { item: Isogen, quantity: 8000 },
      { item: Nocxium, quantity: 10000 },
      { item: Zydrine, quantity: 7000 },
      { item: Megacyte, quantity: 4000 },
      { item: RecursiveComputingModule, quantity: 25 },
      // 缺三哥物品
    ],
  },
  reaction: null,
};

export default StructureExertConduitCouplerBlueprint;

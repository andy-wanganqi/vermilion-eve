import {
  StructureConstructionParts,
  StructureDockingBay,
  StructureHangarArray,
  StructureMarketNetwork,
  StructureMedicalCenter,
  StructureOfficeCenter,
  StructureRepairFacility,
  StructureStorageBay,
} from "../../../Items/ManufactureAndResearch/Components/StructureComponents";
import Astrahus from "../../../Items/Structures/Citadels/Astrahus";
import { Blueprint } from "../../../types";


const AstrahusBlueprint: Blueprint = {
  id: 36966,
  name: "Astrahus Blueprint", //空堡蓝图
  manufacturing: {
    outcome: {
      item: Astrahus,
      quantity: 1,
    },
    materials: [
      { item: StructureConstructionParts, quantity: 1 },
      { item: StructureHangarArray, quantity: 1 },
      { item: StructureStorageBay, quantity: 1 },
      { item: StructureRepairFacility, quantity: 1 },
      { item: StructureDockingBay, quantity: 1 },
      { item: StructureMarketNetwork, quantity: 4 },
      { item: StructureMedicalCenter, quantity: 1 },
      { item: StructureOfficeCenter, quantity: 1 },
    ],
  },
  reaction: null,
};

export default AstrahusBlueprint;

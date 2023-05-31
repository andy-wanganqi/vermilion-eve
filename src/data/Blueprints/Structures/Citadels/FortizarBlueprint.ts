import {
  StructureAdvertisementNexus,
  StructureConstructionParts,
  StructureDockingBay,
  StructureFactory,
  StructureHangarArray,
  StructureLaboratory,
  StructureMarketNetwork,
  StructureMedicalCenter,
  StructureOfficeCenter,
  StructureRepairFacility,
  StructureReprocessingPlant,
  StructureStorageBay,
} from "../../../Items/ManufactureAndResearch/Components/StructureComponents";
import Fortizar from "../../../Items/Structures/Citadels/Fortizar";
import { Blueprint } from "../../../types";

const FortizarBlueprint: Blueprint = {
  id: 36967,
  name: "Fortizar Blueprint", //铁壁蓝图
  manufacturing: {
    outcome: {
      item: Fortizar,
      quantity: 1,
    },
    materials: [
      { item: StructureConstructionParts, quantity: 10 },
      { item: StructureHangarArray, quantity: 10 },
      { item: StructureStorageBay, quantity: 10 },
      { item: StructureLaboratory, quantity: 4 },
      { item: StructureFactory, quantity: 4 },
      { item: StructureRepairFacility, quantity: 10 },
      { item: StructureReprocessingPlant, quantity: 4 },
      { item: StructureDockingBay, quantity: 10 },
      { item: StructureMarketNetwork, quantity: 40 },
      { item: StructureMedicalCenter, quantity: 10 },
      { item: StructureOfficeCenter, quantity: 10 },
      { item: StructureAdvertisementNexus, quantity: 4 },
    ],
  },
  reaction: null,
};

export default FortizarBlueprint;

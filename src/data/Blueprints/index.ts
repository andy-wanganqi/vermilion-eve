import { BlueprintGroup } from "..";
import ManufactureAndResearchBlueprints from "./ManufactureAndResearch";
import StructuresBlueprints from "./Structures";

const ManufacturingBlueprints: BlueprintGroup = {
  name: "Manufacturing",
  subgroups: [
    ManufactureAndResearchBlueprints, 
    StructuresBlueprints
  ],
  blueprints: null,
};

export default ManufacturingBlueprints;

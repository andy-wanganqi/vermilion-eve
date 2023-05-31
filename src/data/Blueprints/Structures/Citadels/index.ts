import { BlueprintGroup } from "../../../types";
import AstrahusBlueprint from "./AstrahusBlueprint";
import FortizarBlueprint from "./FortizarBlueprint";

const CitadelsBlueprints: BlueprintGroup = {
  name: "Citadels",
  blueprints: [AstrahusBlueprint, FortizarBlueprint],
  subgroups: null,
};
export default CitadelsBlueprints;

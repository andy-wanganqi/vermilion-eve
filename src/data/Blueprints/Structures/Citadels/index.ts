import { BlueprintGroup } from "../../..";
import AstrahusBlueprint from "./AstrahusBlueprint";
import FortizarBlueprint from "./FortizarBlueprint";

const CitadelsBlueprints: BlueprintGroup = {
  name: "Citadels",
  blueprints: [AstrahusBlueprint, FortizarBlueprint],
  subgroups: null,
};
export default CitadelsBlueprints;

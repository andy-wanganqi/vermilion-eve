import { BlueprintGroup } from "../types";
import CompositeReactionFormulas from "./Composite";

const ReactionFormulas: BlueprintGroup = {
  name: "Reaction Formulas",
  subgroups: [CompositeReactionFormulas],
  blueprints: null,
};

export default ReactionFormulas;

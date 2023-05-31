import OxygenFuelBlock from "../../Items/ManufactureAndResearch/Components/FuelBlocks/OxygenFuelBlock";
import CaesariumCadmide from "../../Items/ManufactureAndResearch/Materials/ReactionMaterials/ProcessedMoonMaterials/CaesariumCadmide";
import Cadmium from "../../Items/ManufactureAndResearch/Materials/ReactionMaterials/RawMoonMaterials/Cadmium";
import Caesium from "../../Items/ManufactureAndResearch/Materials/ReactionMaterials/RawMoonMaterials/Caesium";
import { Blueprint } from "../../types";

const CaesariumCadmideFormula: Blueprint = {
  id: 46166,
  name: 'Caesarium Cadmide Reaction Formula', // 镉化铯反应配方
  reaction: {
    materials: [
      { item: Cadmium, quantity: 100 },
      { item: Caesium, quantity: 100 },
      { item: OxygenFuelBlock, quantity: 5 },
    ],
    outcome: { item: CaesariumCadmide, quantity: 200 }
  },
  manufacturing: null,
};

export default CaesariumCadmideFormula;

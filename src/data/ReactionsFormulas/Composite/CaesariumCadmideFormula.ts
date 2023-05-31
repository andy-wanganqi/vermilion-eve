import { Blueprint } from "../../types";

const CaesariumCadmideFormula: Blueprint = {
  id: 46166,
  name: 'Caesarium Cadmide Reaction Formula', // 镉化铯反应配方
  reaction: {
    materials: [
      { name: 'Cadmium', quantity: 100 },
      { name: 'Caesium', quantity: 100 },
      { name: 'Oxygen Fuel Block', quantity: 5 },
    ],
    outcome: { name: 'Caesarium Cadmide', quantity: 200 }
  },
  manufacturing: null,
};

export default CaesariumCadmideFormula;

import { Blueprint } from "../../../types";

const AstrahusBlueprint: Blueprint = {
  id: 36966,
  name: "Astrahus Blueprint", //空堡蓝图
  manufacturing: {
    outcome: {
      name: "Astrahus",
      quantity: 1,
    },
    materials: [
      { name: "Structure Construction Parts", quantity: 1 },
      { name: "Structure Hangar Array", quantity: 1 },
      { name: "Structure Storage Bay", quantity: 1 },
      { name: "Structure Repair Facility", quantity: 1 },
      { name: "Structure Docking Bay", quantity: 1 },
      { name: "Structure Market Network", quantity: 4 },
      { name: "Structure Medical Center", quantity: 1 },
      { name: "Structure Office Center", quantity: 1 },
    ],
  },
  reaction: null,
};

export default AstrahusBlueprint;

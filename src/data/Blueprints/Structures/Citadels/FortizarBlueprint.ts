import { Blueprint } from "../../../types";

const FortizarBlueprint: Blueprint = {
  id: 36967,
  name: "Fortizar Blueprint", //铁壁蓝图
  manufacturing: {
    outcome: {
      name: "Fortizar",
      quantity: 1,
    },
    materials: [
      { name: "Structure Construction Parts", quantity: 10 },
      { name: "Structure Hangar Array", quantity: 10 },
      { name: "Structure Storage Bay", quantity: 10 },
      { name: "Structure Laboratory", quantity: 4 },
      { name: "Structure Factory", quantity: 4 },
      { name: "Structure Repair Facility", quantity: 10 },
      { name: "Structure Reprocessing Plant", quantity: 4 },
      { name: "Structure Docking Bay", quantity: 10 },
      { name: "Structure Market Network", quantity: 40 },
      { name: "Structure Medical Center", quantity: 10 },
      { name: "Structure Office Center", quantity: 10 },
      { name: "Structure Advertisement Nexus", quantity: 4 },
    ],
  },
  reaction: null,
};

export default FortizarBlueprint;

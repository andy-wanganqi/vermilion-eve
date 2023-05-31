import numeral from "numeral";
import { Material } from "../data/types";
import { BlueprintSetting } from "../db/types";

export const formatQuantity = (quantity: number) => {
  // return numeral(quantity).format('0,0.00');
  return numeral(quantity).format('0,0');
};

export const formatMaterial = (material: Material) => {
  return `${formatQuantity(material.quantity)} x ${material.item.name}`;
};

export const formatMaterialWithSetting = (material: Material, setting: BlueprintSetting) => {
  const calcQuantity = material.quantity * setting.defaultRuns * (1 - setting.materialEfficiency / 100.0);
  const quantity = Math.max(Math.ceil(calcQuantity), setting.defaultRuns);

  return `${formatQuantity(quantity)} x ${material.item.name}`;
};

const formaters = {
  formatQuantity,
  formatMaterial,
};

export default formaters;

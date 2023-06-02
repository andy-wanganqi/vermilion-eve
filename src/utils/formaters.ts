import numeral from "numeral";
import { BS } from "../db";
import { Material } from "../data/blueprints";

export const formatQuantity = (quantity: number) => {
  // return numeral(quantity).format('0,0.00');
  return numeral(quantity).format('0,0');
};

export const formatMaterial = (material: Material) => {
  return `${formatQuantity(material.quantity)} x ${material.item.name}`;
};

export const formatMaterialWithSetting = (material: Material, blueprintSetting: BS) => {
  const calcQuantity = material.quantity * blueprintSetting.D * (1 - blueprintSetting.M / 100.0);
  const quantity = Math.max(Math.ceil(calcQuantity), blueprintSetting.D);

  return `${formatQuantity(quantity)} x ${material.item.name}`;
};

const formaters = {
  formatQuantity,
  formatMaterial,
};

export default formaters;

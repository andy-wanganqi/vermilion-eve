import numeral from "numeral";
import { Material } from "../data/types";

export const formatQuantity = (quantity: number) => {
  // return numeral(quantity).format('0,0.00');
  return numeral(quantity).format('0,0');
};

export const formatMaterial = (material: Material) => {
  return `${formatQuantity(material.quantity)} x ${material.item.name}`;
};

const formaters = {
  formatQuantity,
  formatMaterial,
};

export default formaters;

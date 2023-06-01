import { ItemGroup } from '../../../..';
import HeliumFuelBlock from './HeliumFuelBlock';
import HydrogenFuelBlock from './HydrogenFuelBlock';
import NitrogenFuelBlock from './NitrogenFuelBlock';
import OxygenFuelBlock from './OxygenFuelBlock';

const FuelBlocks: ItemGroup = {
  name: "Fuel Blocks",
  subgroups: null,
  items: [
    HeliumFuelBlock,
    HydrogenFuelBlock,
    NitrogenFuelBlock,
    OxygenFuelBlock,
  ],
};

export default FuelBlocks;
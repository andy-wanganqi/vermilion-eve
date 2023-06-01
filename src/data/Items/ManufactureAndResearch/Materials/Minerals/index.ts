import { ItemGroup } from '../../../..';
import Tritanium from './Tritanium';
import Pyerite from './Pyerite';
import Mexallon from './Mexallon';
import Isogen from './Isogen';
import Nocxium from './Nocxium';
import Zydrine from './Zydrine';
import Megacyte from './Megacyte';

const Minerals: ItemGroup = {
  name: "Minerals",
  subgroups: null,
  items: [
    Tritanium,
    Pyerite,
    Mexallon,
    Isogen,
    Nocxium,
    Zydrine,
    Megacyte
  ],
};

export {
  Tritanium,
  Pyerite,
  Mexallon,
  Isogen,
  Nocxium,
  Zydrine,
  Megacyte,
};

export default Minerals;
import { ItemGroup } from '../../../../../types';
import BroadcastNode from './BroadcastNode';
import IntegrityResponseDrones from './IntegrityResponseDrones';
import NanoFactory from './NanoFactory';
import OrganicMortarApplicators from './OrganicMortarApplicators';
import RecursiveComputingModule from './RecursiveComputingModule';
import SelfHarmonizingPowerCore from './SelfHarmonizingPowerCore';
import SterileConduits from './SterileConduits';
import WetwareMainframe from './WetwareMainframe';

const AdvancedPlanetaryMaterials: ItemGroup = {
  name: "Advanced Planetary Materials",
  subgroups: null,
  items: [
    BroadcastNode,
    IntegrityResponseDrones,
    NanoFactory,
    OrganicMortarApplicators,
    RecursiveComputingModule,
    SelfHarmonizingPowerCore,
    SterileConduits,
    WetwareMainframe,
  ],
};

export {
  BroadcastNode,
  IntegrityResponseDrones,
  NanoFactory,
  OrganicMortarApplicators,
  RecursiveComputingModule,
  SelfHarmonizingPowerCore,
  SterileConduits,
  WetwareMainframe,
};

export default AdvancedPlanetaryMaterials;
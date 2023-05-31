import { BlueprintGroup } from './types';
import blueprintGroup from './Blueprints';
import reactionGroup from './ReactionsFormulas';

export interface Data {
  blueprintGroup: BlueprintGroup;
  reactionGroup: BlueprintGroup;
}

const data: Data = {
  blueprintGroup,
  reactionGroup,
};

export default data;

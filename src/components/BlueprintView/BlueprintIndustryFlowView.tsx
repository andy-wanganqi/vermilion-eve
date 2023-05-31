import React from "react";
import { Collapse } from "antd";

import { Blueprint } from "../../data/types";

export interface BlueprintIndustryFlowViewProps {
  blueprint: Blueprint | null;
  materialEfficiency: number;
  defaultRuns: number;
};

const { Panel } = Collapse;

const BlueprintIndustryFlowView: React.FC<BlueprintIndustryFlowViewProps> = (
  props: BlueprintIndustryFlowViewProps
) => {
  const { blueprint } = props;
  const industryFlow = blueprint?.manufacturing ?? blueprint?.reaction;
  return (
    <>
      <Collapse defaultActiveKey={["outcome", "materials"]}>
        <Panel header="Outcome" key="outcome">
          {industryFlow && (<div>{industryFlow.outcome.quantity} x {industryFlow.outcome.item.name}</div>)}
        </Panel>
        <Panel header="Required input materials" key="materials">
          {industryFlow && industryFlow.materials.map(material => (<div key={material.item.name}>{material.quantity} x {material.item.name}</div>))}
        </Panel>
      </Collapse>
    </>
  );
};

export default BlueprintIndustryFlowView;

import React from "react";
import { Collapse, Space, Image } from "antd";

import { Blueprint } from "../../data/types";
import { fallbackImage } from "../../assets/strings";
import { formatMaterial, formatQuantity } from "../../utils/formaters";

export interface BlueprintIndustryFlowViewProps {
  blueprint: Blueprint | null;
  materialEfficiency: number;
  defaultRuns: number;
}

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
          <Space>
            {industryFlow && (
              <Space>
                <Image
                  preview={false}
                  width={32}
                  height={32}
                  src={`https://images.evetech.net/types/${industryFlow.outcome.item.id}/icon`}
                  fallback={fallbackImage}
                />
                <span>
                  {formatMaterial(industryFlow.outcome)}
                </span>
              </Space>
            )}
          </Space>
        </Panel>
        <Panel header="Required input materials" key="materials">
          {industryFlow &&
            industryFlow.materials.map((material) => (
              <div key={material.item.name}>
                <Space>
                  <Image
                    preview={false}
                    width={32}
                    height={32}
                    src={`https://images.evetech.net/types/${material.item.id}/icon`}
                    fallback={fallbackImage}
                  />
                  <span>
                    {formatMaterial(material)}
                  </span>
                </Space>
              </div>
            ))}
        </Panel>
      </Collapse>
    </>
  );
};

export default BlueprintIndustryFlowView;

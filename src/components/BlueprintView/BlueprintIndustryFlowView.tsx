import React from "react";
import { Collapse, Space, Image, Row, Col, Typography  } from "antd";

import { fallbackImage } from "../../assets/strings";
import { formatMaterial, formatMaterialWithSetting } from "../../utils/formaters";
import { Blueprint } from "../../data/blueprints";
import { BS } from "../../db";

const { Title } = Typography;

export interface BlueprintIndustryFlowViewProps {
  blueprint: Blueprint | null;
  setting: BS;
}

const { Panel } = Collapse;

const BlueprintIndustryFlowView: React.FC<BlueprintIndustryFlowViewProps> = (
  props: BlueprintIndustryFlowViewProps
) => {
  const { blueprint, setting } = props;
  const industryFlow = blueprint?.manufacturing ?? blueprint?.reaction;
  return (
    <Row gutter={24}>
      <Col className="gutter-row" span={12}>
        <Title level={2} style={{textAlign: 'center'}}>Original Blueprint</Title>
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
                  <span>{formatMaterial(industryFlow.outcome)}</span>
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
                    <span>{formatMaterial(material)}</span>
                  </Space>
                </div>
              ))}
          </Panel>
        </Collapse>
      </Col>
      <Col className="gutter-row" span={12}>
        <Title level={2} style={{textAlign: 'center'}}>Applied settings</Title>
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
                  <span>{formatMaterialWithSetting(industryFlow.outcome, setting)}</span>
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
                    <span>{formatMaterialWithSetting(material, setting)}</span>
                  </Space>
                </div>
              ))}
          </Panel>
        </Collapse>
      </Col>
    </Row>
  );
};

export default BlueprintIndustryFlowView;

import React from "react";
import { Collapse, Col, Row } from "antd";

import BlueprintTree from "./BlueprintTree";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const SettingsPage: React.FC<React.PropsWithChildren> = (
  props: React.PropsWithChildren
) => {
  const onChange = (key: string | string[]) => {
    // console.log(key);
  };
  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <Collapse defaultActiveKey={["blueprints"]} onChange={onChange}>
            <Panel header="蓝图设置" key="blueprints">
              <BlueprintTree />
            </Panel>
            <Panel header="堡垒设置" key="structures">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Col>
        <Col className="gutter-row" span={12}>
          {props.children}
        </Col>
      </Row>
    </>
  );
};

export default SettingsPage;

import React, { useContext } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { Collapse, Col, Row, Space } from "antd";

import BlueprintTree from "./BlueprintTree";
import { BlueprintSettingPageContext } from "./BlueprintSettingPage";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const SettingsPage: React.FC<React.PropsWithChildren> = (
  props: React.PropsWithChildren
) => {
  const { blueprintSettingsVisibility, setBlueprintSettingsVisibility } = useContext(BlueprintSettingPageContext);

  const onChange = (key: string | string[]) => {
    // console.log(key);
  };

  const handleBlueprintTreeExtraClick = (
    event:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // If you don't want click extra trigger collapse, you can prevent this:
    event.stopPropagation();
    setBlueprintSettingsVisibility(!blueprintSettingsVisibility);
  };
  const blueprintTreeExtra = () =>
    blueprintSettingsVisibility ? (
      <Space>
        <span>Click to hide settings</span>
        <EyeOutlined onClick={handleBlueprintTreeExtraClick} />
      </Space>
    ) : (
      <Space>
        <span>Click to show settings</span>
        <EyeInvisibleOutlined onClick={handleBlueprintTreeExtraClick} />
      </Space>
    );

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <Collapse defaultActiveKey={["blueprints"]} onChange={onChange}>
            <Panel
              header="Blueprint Settings"
              key="blueprints"
              extra={blueprintTreeExtra()}
            >
              <BlueprintTree />
            </Panel>
            <Panel header="Structure Settings" key="structures">
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

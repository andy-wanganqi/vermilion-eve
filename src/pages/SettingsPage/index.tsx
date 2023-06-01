import React, { useState } from "react";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { Collapse, Col, Row, Space } from "antd";

import BlueprintTree from "./BlueprintTree";
import { Outlet } from "react-router-dom";
import { Blueprint } from "../../data";

const { Panel } = Collapse;

interface SettingsPageContextType {
  blueprintSettingsVisibility: boolean;
  handleBlueprintSelect: (blueprint: Blueprint) => void;
}

const SettingsPageContextState: SettingsPageContextType = {
  blueprintSettingsVisibility: false,
  handleBlueprintSelect: (blueprint: Blueprint) => {},
};

export const SettingsPageContext = React.createContext<SettingsPageContextType>(
  SettingsPageContextState
);

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const SettingsPage: React.FC = () => {
  const [pageContext, setPageContext] = useState({
    ...SettingsPageContextState,
  });

  const handleBlueprintSettingsExtraClick = (
    event:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // If you don't want click extra trigger collapse, you can prevent this:
    event.stopPropagation();
    setPageContext({
      ...pageContext,
      blueprintSettingsVisibility: !blueprintSettingsVisibility,
    });
  };
  const blueprintSettingsExtra = () =>
    blueprintSettingsVisibility ? (
      <Space>
        <span>Click to hide settings</span>
        <EyeOutlined onClick={handleBlueprintSettingsExtraClick} />
      </Space>
    ) : (
      <Space>
        <span>Click to show settings</span>
        <EyeInvisibleOutlined onClick={handleBlueprintSettingsExtraClick} />
      </Space>
    );

  const { blueprintSettingsVisibility } = pageContext;
  return (
    <SettingsPageContext.Provider value={pageContext}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={12}>
          <Collapse defaultActiveKey={["blueprints"]}>
            <Panel
              header="Blueprint Settings"
              key="blueprints"
              extra={blueprintSettingsExtra()}
            >
              <BlueprintTree />
            </Panel>
            <Panel header="Structure Settings" key="structures">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Col>
        <Col className="gutter-row" span={12}>
          <Outlet />
        </Col>
      </Row>
    </SettingsPageContext.Provider>
  );
};

export default SettingsPage;

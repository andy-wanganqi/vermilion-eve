import React from "react";
import { Collapse, Col, Row } from "antd";

import BlueprintSettingWidget from "./BlueprintSettingWidget";
import StructureModificationSettingWidget from "./StructureModificationSettingWidget";

const { Panel } = Collapse;

interface SettingsPageContextType {
}

const SettingsPageContextState: SettingsPageContextType = {
};

export const SettingsPageContext = React.createContext<SettingsPageContextType>(
  SettingsPageContextState
);

const SettingsPage: React.FC = () => {
  return (
    <SettingsPageContext.Provider value={SettingsPageContextState}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={24}>
          <Collapse defaultActiveKey={["blueprint"]}>
            <Panel
              header="Blueprint Settings"
              key="blueprint"
            >
              <BlueprintSettingWidget />
            </Panel>
            <Panel header="Structure Modification Settings" key="structure modification">
              <StructureModificationSettingWidget />
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </SettingsPageContext.Provider>
  );
};

export default SettingsPage;

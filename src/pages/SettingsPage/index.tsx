import React from "react";
import { Col, Row, Anchor, Card, Space, Image, Button, message } from "antd";

import BlueprintSettingWidget from "./BlueprintSettingWidget";
import StructureModificationSettingWidget from "./StructureModificationSettingWidget";
import { fallbackImage } from "../../assets/strings";
import blueprintImage from "../../assets/images/blueprint.png";
import modificationImage from "../../assets/images/modification.png";
import db from "../../db";

interface SettingsPageContextType {}

const SettingsPageContextState: SettingsPageContextType = {};

export const SettingsPageContext = React.createContext<SettingsPageContextType>(
  SettingsPageContextState
);

const BlueprintTitle = (showSaveButton: boolean) => (
  <Space>
    <Image
      preview={false}
      width={32}
      height={32}
      src={blueprintImage}
      fallback={fallbackImage}
    />
    <span>Blueprint Setting</span>
    { showSaveButton && <Button
      type="primary"
      size="small"
      onClick={() => {
        db.saveCachedBlueprintSettings();
        message.success(`Successfully saved blueprint settings`);
      }}
    >
      Save All
    </Button>}
  </Space>
);

const ModificationTitle = (
  <Space>
    <Image
      preview={false}
      width={32}
      height={32}
      src={modificationImage}
      fallback={fallbackImage}
    />
    <span>Structure Modification Setting</span>
  </Space>
);

const SettingsPage: React.FC = () => {
  return (
    <SettingsPageContext.Provider value={SettingsPageContextState}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={18}>
          <Space direction="vertical" style={{ width: "100%" }}>
            <div id="blueprint">
              <Card title={BlueprintTitle(true)}>
                <BlueprintSettingWidget />
              </Card>
            </div>
            <div id="structure_modification">
              <Card title={ModificationTitle}>
                <StructureModificationSettingWidget />
              </Card>
            </div>
          </Space>
        </Col>
        <Col className="gutter-row" span={6}>
          <Anchor
            items={[
              {
                key: "blueprint",
                href: "#blueprint",
                title: BlueprintTitle(false),
              },
              {
                key: "structure_modification",
                href: "#structure_modification",
                title: ModificationTitle,
              },
            ]}
          />
        </Col>
      </Row>
    </SettingsPageContext.Provider>
  );
};

export default SettingsPage;
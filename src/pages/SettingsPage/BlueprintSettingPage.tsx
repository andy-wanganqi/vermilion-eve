import React, { useEffect, useState } from "react";
import {
  Descriptions,
  Divider,
  InputNumber,
  Space,
  Image,
  Button,
  message,
} from "antd";

import SettingsPage from ".";
import BlueprintView from "../../components/BlueprintView";
import { Blueprint } from "../../data/types";
import { fallbackImage } from "../../assets/strings";
import db from "../../db";
import { BlueprintSetting, defaultBlueprintSetting } from "../../db/types";

interface BlueprintSettingPageContextType {
  blueprint: Blueprint | null;
  setBlueprint: React.Dispatch<React.SetStateAction<Blueprint | null>>;
}

const BlueprintSettingPageContextState = {
  blueprint: null,
  setBlueprint: () => {},
};

export const BlueprintSettingPageContext =
  React.createContext<BlueprintSettingPageContextType>(
    BlueprintSettingPageContextState
  );

const BlueprintSettingPage: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [blueprint, setBlueprint] = useState<Blueprint | null>(null);
  const [setting, setSetting] = useState<BlueprintSetting>(
    defaultBlueprintSetting
  );

  const materiaEfficiencyDisabled = !blueprint?.manufacturing;
  const defaultRunsDisabled = !blueprint;
  const titleText =
    blueprint !== null
      ? blueprint.name
      : "Select a blueprint or reaction formula to start";

  const title =
    blueprint !== null ? (
      <Space>
        <Image
          width={32}
          height={32}
          src={`https://images.evetech.net/types/${blueprint.id}/bp`}
          fallback={fallbackImage}
        />
        <span>{titleText}</span>
      </Space>
    ) : (
      titleText
    );

  const handleSave = (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (blueprint) {
      db.setBlueprintSetting(blueprint.id, setting);
      message.success(`Successfully saved blueprint setting of ${blueprint.name}`);
    }
  };

  useEffect(() => {
    if (blueprint) {
      const setting = db.getBlueprintSetting(blueprint.id);
      setSetting(setting);
    }
  }, [blueprint]);

  return (
    <BlueprintSettingPageContext.Provider value={{ blueprint, setBlueprint }}>
      <SettingsPage>
        <>
          <Descriptions column={2} title={title}></Descriptions>
          <Space direction="vertical">
            <InputNumber
              disabled={materiaEfficiencyDisabled}
              addonBefore="Material Efficiency"
              min={0}
              max={10}
              defaultValue={setting.materialEfficiency}
              value={setting.materialEfficiency}
              onChange={(value: number | null) => {
                setSetting({
                  ...setting,
                  materialEfficiency: value || 0,
                });
              }}
            />
            <InputNumber
              disabled={defaultRunsDisabled}
              addonBefore="Default Runs"
              min={1}
              defaultValue={setting.defaultRuns}
              value={setting.defaultRuns}
              onChange={(value: number | null) => {
                setSetting({
                  ...setting,
                  defaultRuns: value || 1,
                });
              }}
            />
            <Button type="primary" onClick={handleSave}>
              Save
            </Button>
          </Space>
          <Divider></Divider>
          <BlueprintView blueprint={blueprint} />
          <Divider></Divider>
          <Descriptions column={1} title="Explanation">
            <Descriptions.Item label="Material Efficiency">
              How Material Efficiency works
            </Descriptions.Item>
            <Descriptions.Item label="Default Runs">
              How Default Runs works
            </Descriptions.Item>
          </Descriptions>
        </>
      </SettingsPage>
    </BlueprintSettingPageContext.Provider>
  );
};

export default BlueprintSettingPage;

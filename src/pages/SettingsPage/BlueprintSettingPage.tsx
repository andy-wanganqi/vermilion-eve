import React, { useState } from "react";
import {
  Descriptions,
  Divider,
  InputNumber,
  Space,
  Image,
} from "antd";

import SettingsPage from ".";
import BlueprintView from "../../components/BlueprintView";
import { Blueprint } from "../../data/types";
import { fallbackImage } from "../../assets/strings";

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
  const [blueprint, setBlueprint] = useState<Blueprint | null>(null);

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

  return (
    <BlueprintSettingPageContext.Provider value={{ blueprint, setBlueprint }}>
      <SettingsPage>
        <>
          <Descriptions column={2} title={title}></Descriptions>
          <Space direction="vertical">
            <InputNumber
              disabled={materiaEfficiencyDisabled}
              addonBefore="Material Efficiency"
              defaultValue={10}
            />
            <InputNumber
              disabled={defaultRunsDisabled}
              addonBefore="Default Runs"
              defaultValue={10}
            />
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

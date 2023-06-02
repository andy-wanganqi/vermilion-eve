import React, { useEffect, useState } from "react";
import { useLoaderData, LoaderFunction } from "react-router-dom";
import {
  Descriptions,
  Divider,
  InputNumber,
  Space,
  Image,
  Button,
  message,
  Typography,
} from "antd";

import BlueprintView from "../../components/BlueprintView";
import { fallbackImage } from "../../assets/strings";
import db, { BlueprintSetting, defaultBlueprintSetting } from "../../db";
import { Blueprint, findBlueprint } from "../../data";
const { Title } = Typography;

export const blueprintLoader: LoaderFunction = ({params}) => {
  const blueprint = findBlueprint(parseInt(params.id ?? '-1'));
  if (!blueprint) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return blueprint;
};

const BlueprintPreview: React.FC = () => {
  const blueprint = useLoaderData() as Blueprint;
  
  const handleSave = (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (blueprint) {
      db.setBlueprintSetting(blueprint.id, setting);
      message.success(
        `Successfully saved blueprint setting of ${blueprint.name}`
      );
    }
  };

  const [setting, setSetting] = useState<BlueprintSetting>(
    defaultBlueprintSetting
  );

  const materiaEfficiencyDisabled = !blueprint?.manufacturing;
  const defaultRunsDisabled = !blueprint;

  useEffect(() => {
    if (blueprint) {
      const setting = db.getBlueprintSetting(blueprint.id);
      setSetting(setting);
    }
  }, [blueprint]);

  return (
    <>
      <Space direction="vertical">
        {blueprint === null ? (
          <Title level={3}>
            Select a blueprint or reaction formula to start
          </Title>
        ) : (
          <Space>
            <Image
              preview={false}
              width={32}
              height={32}
              src={`https://images.evetech.net/types/${blueprint.id}/bp`}
              fallback={fallbackImage}
            />
            <Title level={3}>{blueprint.name}</Title>
          </Space>
        )}

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

      <BlueprintView blueprint={blueprint} setting={setting} />
      <Divider></Divider>

      <Descriptions column={1} title="Explanation">
        <Descriptions.Item label="Material Efficiency">
          Material efficiency of each blueprint will be used in other pages to
          calculate the final quantity of materials.
        </Descriptions.Item>
        <Descriptions.Item label="Default Runs">
          Default runs of each blueprint will be used in other pages to
          calculate the materials and outcome. For example, if the default runs
          is 10, and your materials is only enough for 1 run, then the
          calculation will show you that the shortage of materials is based on
          10 runs.
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default BlueprintPreview;

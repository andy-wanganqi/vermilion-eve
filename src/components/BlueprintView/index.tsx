import React from "react";
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from "antd";
import type { TabsProps } from "antd";

import BlueprintIndustryFlowView from "./BlueprintIndustryFlowView";
import { Blueprint } from "../../data";
import { BlueprintSetting } from "../../db";


export interface BlueprintViewProps {
  blueprint: Blueprint | null;
  setting: BlueprintSetting;
};

const BlueprintView: React.FC<BlueprintViewProps> = (
  props: BlueprintViewProps
) => {
  const { blueprint, setting } = props;
  const activeKey = blueprint === null ? '' : !!blueprint?.manufacturing ? 'manufacturing' : 'reaction';
  const manufacturingDisabled = !blueprint?.manufacturing;
  const reactionDisabled = !blueprint?.reaction;
  const children = <BlueprintIndustryFlowView blueprint={blueprint} setting={setting}/>;

  const items: TabsProps["items"] = [
    {
      key: "manufacturing",
      label: (
        <span>
          <AndroidOutlined />
          Manufacturing
        </span>
      ),
      children: manufacturingDisabled ? "" : children,
      disabled: manufacturingDisabled,
    },
    {
      key: "reaction",
      label: (
        <span>
          <AppleOutlined />
          Reaction
        </span>
      ),      
      children: reactionDisabled ? "" : children,
      disabled: reactionDisabled,
    },
  ];
  return (
    <>
      <Tabs activeKey={activeKey} items={items} />
    </>
  );
};

export default BlueprintView;

import React from "react";
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Col, Divider, Row, Descriptions, Tabs, InputNumber } from "antd";
import type { TabsProps } from "antd";

import BlueprintIndustryFlowView from "./BlueprintIndustryFlowView";
import { Blueprint } from "../../data/types";


export interface BlueprintViewProps {
  blueprint: Blueprint | null;
};

const BlueprintView: React.FC<BlueprintViewProps> = (
  props: BlueprintViewProps
) => {
  const { blueprint } = props;
  const activeKey = blueprint === null ? '' : !!blueprint?.manufacturing ? 'manufacturing' : 'reaction';
  const manufacturingDisabled = !blueprint?.manufacturing;
  const reactionDisabled = !blueprint?.reaction;
  const children = <BlueprintIndustryFlowView blueprint={blueprint} materialEfficiency={10} defaultRuns={10}/>;

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
      <Tabs type="card" activeKey={activeKey} items={items} />
    </>
  );
};

export default BlueprintView;

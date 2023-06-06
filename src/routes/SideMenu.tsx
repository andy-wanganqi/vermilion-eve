import React from "react";
import { useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { BlockOutlined, SettingOutlined } from "@ant-design/icons";

const SideMenu: React.FC = () => {
  const navigate = useNavigate();
  const items: MenuProps["items"] = [
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings",
      onClick: () => {
        navigate("/settings");
      },
    },
    {
      key: "location-manager",
      icon: <BlockOutlined />,
      label: "Location Manager",
      onClick: () => {
        navigate("/location");
      },
    },
  ];

  return (
    <>
      <div className="demo-logo-vertical" />
      <Menu theme="dark" mode="inline" items={items} />
    </>
  );
};

export default SideMenu;

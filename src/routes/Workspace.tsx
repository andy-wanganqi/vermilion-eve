import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";
import { Layout, Menu, theme, ConfigProvider } from "antd";
import { BlockOutlined, SettingOutlined } from "@ant-design/icons";
import en_GB from "antd/es/locale/en_GB";
import "antd/dist/reset.css";
import HeaderContent from "./HeaderContent";

const { Header, Content, Footer, Sider } = Layout;

const Workspace: React.FC<React.PropsWithChildren> = (
  props: React.PropsWithChildren
) => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
    <ConfigProvider locale={en_GB}>
      <Layout hasSider>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={items}
          />
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <HeaderContent />
          </Header>
          <Content style={{ margin: "24px 16px", overflow: "initial" }}>
            <div
              style={{
                padding: 24,
                background: colorBgContainer,
                minHeight: "90vh",
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default Workspace;

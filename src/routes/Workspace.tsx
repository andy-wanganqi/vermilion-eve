import React from "react";
import { Outlet } from "react-router-dom";
import { Layout, theme, ConfigProvider } from "antd";
import "antd/dist/reset.css";
import HeaderContent from "./HeaderContent";
import SideMenu from "./SideMenu";

const { Header, Content, Footer, Sider } = Layout;

const Workspace: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <ConfigProvider>
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
          <SideMenu />
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

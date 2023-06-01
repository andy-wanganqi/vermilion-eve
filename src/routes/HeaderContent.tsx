import React from "react";
import { Row, Col, Space, Dropdown, Avatar } from "antd";
import type { MenuProps } from "antd";
import {
  PoweroffOutlined,
  UserOutlined,
} from "@ant-design/icons";

const items: MenuProps["items"] = [
  {
    key: "profile",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
      >
        Profile
      </a>
    ),
    icon: <UserOutlined />,
    disabled: true,
  },
  {
    key: "signoff",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
      >
        Sign off
      </a>
    ),
    icon: <PoweroffOutlined />,
    disabled: true,
  }
];

const HeaderContent: React.FC = () => {
  return (
    <Row justify="end">
      <Col
        span={8}
        style={{
          // border: "1px solid red",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div className="header_menu header_menu_button">
          <Dropdown menu={{ items }} arrow={false}>
            <Space>
              <Avatar icon={<UserOutlined />}/>
              <span>Beauty</span>
            </Space>
          </Dropdown>
        </div>
        <div className="header_menu header_menu_placeholder"></div>
      </Col>
    </Row>
  );
};

export default HeaderContent;

import React, { useState } from "react";

import { Link } from "react-router-dom";

import {
  Layout,
  Menu,
  Typography
} from "antd";
import {
  PieChartOutlined,
  UserOutlined,
  HomeOutlined
} from "@ant-design/icons";

const { Sider } = Layout;
const { Item } = Menu;

const { Title } = Typography;

interface Sidebar {
  collapseSidebar: boolean,
  setCollapseSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar: React.FC<Sidebar> = ({ collapseSidebar, setCollapseSidebar }) => {


  return (
    <Sider
      breakpoint="lg"
      collapsed={collapseSidebar}
    >
      <Menu
        mode="inline"
        theme="dark"
      >

        {collapseSidebar ? (
          <div style={{ marginTop: 22, marginLeft: 25 }}>
            <Item>
              <Title level={2} style={{ color: "white" }}>
                M
              </Title>
            </Item>
          </div>
        ) : (
            <div style={{ margin: 22 }}>
              <Title level={2} style={{ color: "white" }}>
                Moby
              </Title>
            </div>
          )}

        <Item icon={<PieChartOutlined />}>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </Item>

        <Item icon={<UserOutlined />}>
          <Link to="/client">
            Clientes
          </Link>
        </Item>

        <Item icon={<HomeOutlined />}>
          <Link to="/property">
            Propriedades
          </Link>
        </Item>

      </Menu>
    </Sider >
  )

}

export default Sidebar;  

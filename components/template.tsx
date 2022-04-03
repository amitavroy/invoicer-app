import { Layout, Menu, Breadcrumb } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";

interface Props {}

const Template: React.FC<Props> = ({ children }) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo"></div>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{children}</div>
      </Content>
    </Layout>
  );
};

export default Template;

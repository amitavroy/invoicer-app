import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import MainMenu from "./menu";

interface Props {
  pageTitle: string;
}

const Template: React.FC<Props> = ({ pageTitle, children }) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo"></div>
        <MainMenu />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <h2 className="page-title">{pageTitle}</h2>
        <div className="site-layout-content">{children}</div>
      </Content>
    </Layout>
  );
};

export default Template;

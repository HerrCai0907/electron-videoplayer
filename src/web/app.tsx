import React, { Component } from "react";
import { Typography, Layout } from "antd";
const { Title } = Typography;
const { Content, Footer, Header } = Layout;
import "./app.css";

export class App extends Component<{}, { svgPath: string[] }> {
  override render() {
    return (
      <Layout className="layout">
        <Header style={{ height: "fit-content" }}>
          <Title style={{ color: "white" }} level={4}>
            DEMO
          </Title>
        </Header>
        <Content style={{ padding: "0 5px" }}></Content>
        <Footer style={{ textAlign: "center" }}>Demo ©2022 Created by Congcong Cai</Footer>
      </Layout>
    );
  }
}

import React, { Component } from "react";
import { Typography, Layout } from "antd";

const { Title } = Typography;
const { Content, Footer, Header } = Layout;
import "./app.css";
import VideoPlayer from "./video_player";

export class App extends Component<{}, { svgPath: string[] }> {
  override render() {
    return (
      <Layout className="layout">
        <Header style={{ height: "fit-content" }}>
          <Title style={{ color: "white" }} level={4}>
            DEMO
          </Title>
        </Header>
        <Content style={{ padding: "0 5px" }}>
          <VideoPlayer></VideoPlayer>
        </Content>
        <Footer style={{ textAlign: "center" }}>Video Player ©2022 Created by Congcong Cai</Footer>
      </Layout>
    );
  }
}

import React, { useEffect, useState } from "react";
import Player, { useMessageContextRef, ACTIONS, EVENTS } from "griffith";
import { Card, Col, Divider, Row } from "antd";
import { Tags } from "./tags";

const sources = {
  hd: {
    format: "mp4",
    play_url: "file:///home/ccc/Downloads/sample-mp4-file-small.mp4",
  },
};
let currentTime: number = 0;

const VideoPlayer = (props: {}) => {
  const messageContextRef = useMessageContextRef();
  messageContextRef.useEvent(EVENTS.TIMEUPDATE, (data) => {
    currentTime = data.currentTime;
  });
  const createOnClickGoto = (timestep: number) => {
    return () => {
      messageContextRef.dispatchAction(ACTIONS.TIME_UPDATE, { currentTime: timestep });
    };
  };
  return (
    <div className="site-card-wrapper">
      <Row gutter={24} align="top">
        <Col span={20}>
          <Card title="video" bordered={true}>
            <Player
              id="video player"
              sources={sources}
              locale={"zh-Hans"}
              messageContextRef={messageContextRef}
              shouldObserveResize={true}
            ></Player>
          </Card>
        </Col>
        <Col span={4}>
          <Card title="timeline" bordered={true}>
            <Tags<number> onClickAddTag={() => currentTime} createOnClickTag={createOnClickGoto}></Tags>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default VideoPlayer;

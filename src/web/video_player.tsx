import React from "react";
import Player, { useMessageContextRef, ACTIONS, EVENTS, PlaySourceMap } from "griffith";
import { Card, Col, Row } from "antd";
import { Tags } from "./tags";

let currentTime = 0;

const VideoPlayer = (props: { source: string }) => {
  const messageContextRef = useMessageContextRef();
  messageContextRef.useEvent(EVENTS.TIMEUPDATE, (data) => {
    currentTime = data.currentTime;
  });
  const sources: PlaySourceMap = {
    hd: {
      play_url: props.source,
    },
  };
  return (
    <div className="site-card-wrapper">
      <Row gutter={24} align="top">
        <Col span={18}>
          <Card bordered={false}>
            <Player
              id="video player"
              sources={sources}
              locale={"zh-Hans"}
              messageContextRef={messageContextRef}
              shouldObserveResize={true}
            ></Player>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="timeline" bordered={true}>
            <Tags
              onClickAddTag={() => {
                return currentTime;
              }}
              createOnClickTag={(tag) => {
                return () => messageContextRef.dispatchAction(ACTIONS.TIME_UPDATE, { currentTime: tag });
              }}
            ></Tags>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default VideoPlayer;

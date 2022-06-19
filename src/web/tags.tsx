import { Button, Divider, Timeline } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { Component } from "react";

type TagInfo = number;
type P = {
  createOnClickTag: (tag: TagInfo) => () => void;
  onClickAddTag: () => number;
};
type S = { tags: TagInfo[] };

function formateTime(time: number) {
  const hour = Math.floor(time / 3600);
  const minute = Math.floor((time - hour * 3600) / 60);
  const second = time % 60;

  return `${hour}:${minute}:${second.toFixed(2)}`;
}

export class Tags extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = { tags: [] };
  }

  onClickAddTag = () => {
    const tag = this.props.onClickAddTag();
    if (!this.state.tags.includes(tag)) {
      this.setState({ tags: [...this.state.tags, tag] });
    }
  };
  override render(): React.ReactNode {
    return (
      <div>
        <Button type="primary" onClick={this.onClickAddTag}>
          添加标签
        </Button>
        <Divider></Divider>
        <Timeline reverse={true}>
          {this.state.tags.map((tag) => (
            <Timeline.Item>
              <TextArea placeholder={`${formateTime(tag)}`} autoSize />
              <Button key={tag} size="small" onClick={this.props.createOnClickTag(tag)}>
                跳转
              </Button>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    );
  }
}

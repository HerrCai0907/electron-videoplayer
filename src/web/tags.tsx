import { Button } from "antd";
import React, { Component } from "react";

type P<T> = { createOnClickTag: (tag: T) => () => void; onClickAddTag: () => T };
type S<T> = { tags: T[] };

export class Tags<T> extends Component<P<T>, S<T>> {
  constructor(props: P<T>) {
    super(props);
    this.state = { tags: [] };
  }

  onClickAddTag = () => {
    this.setState({ tags: [...this.state.tags, this.props.onClickAddTag()] });
  };
  override render(): React.ReactNode {
    return (
      <div>
        <Button type="primary" onClick={this.onClickAddTag}>
          Add Tag
        </Button>
        {this.state.tags.map((tag, i) => (
          <Button key={i} onClick={this.props.createOnClickTag(tag)}>
            goto tag {i}
          </Button>
        ))}
      </div>
    );
  }
}

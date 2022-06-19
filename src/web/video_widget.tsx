import React, { Component } from "react";
import { Uploader } from "./uploader";
import VideoPlayer from "./video_player";

type P = {};
type S = { source: string | null };

export class VideoWidget extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = { source: null };
  }
  setFile = (path: string) => {
    this.setState({ source: path });
  };

  override render(): React.ReactNode {
    if (this.state.source) {
      return <VideoPlayer source={this.state.source}></VideoPlayer>;
    } else {
      return <Uploader setFile={this.setFile}></Uploader>;
    }
  }
}

import { message, Upload, UploadProps } from "antd";
const { Dragger } = Upload;
import { InboxOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import { UploadFile } from "antd/lib/upload/interface";

type P = { setFile: (path: string) => void };

export class Uploader extends Component<P, {}> {
  draggerProps: UploadProps<UploadFile> = {
    name: "file",
    multiple: true,
    action: undefined,
    beforeUpload: (file) => {
      console.log(file.type);
      const isVideo = file.type === "video/mp4";
      if (!isVideo) {
        message.error(`${file.name} is not a png file`);
      }
      return isVideo || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      if (info.file.originFileObj == undefined) return;
      const path = info.file.originFileObj.path;
      switch (info.file.status) {
        case "done": {
          this.props.setFile(info.file.originFileObj.path);
          break;
        }
      }
    },
  };

  override render() {
    return (
      <Dragger {...this.draggerProps}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">选择文件</p>
        <p className="ant-upload-hint">支持mp4格式</p>
      </Dragger>
    );
  }
}

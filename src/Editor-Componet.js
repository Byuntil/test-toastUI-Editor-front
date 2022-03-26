import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Component, createRef } from "react";

class MyComponent extends Component {
  editorRef = createRef();

  constructor() {
    super();
    this.state = {
      content: "",
    };
  }

  onClick = () => {
    this.setState({
      content: this.editorRef.current.getInstance().getHtml(),
    });
    console.log(this.content);
  };

  uploadImage = async (blob) => {
    const formData = new FormData();
    formData.append("file", blob);

    await fetch("http://localhost:8080/s3/upload", {
      method: "POST",
      body: formData,
      accept: "text/plain",
    })
      .then((response) => {
        return response.text();
      })
      .then((response) => {
        console.log(response);
      });
  };
  render() {
    return (
      <div>
        <Editor
          initialValue="내용을 입력하세요"
          previewStyle="vertical"
          height="600px"
          initialEditType="markdown"
          useCommandShortcut={true}
          ref={this.editorRef}
          hooks={{
            addImageBlobHook: (blob, callback) => {
              const img_url = this.uploadImage(blob);
              console.log("2" + img_url);
              callback(img_url, "image");
            },
          }}
        />
        <form action="/submit" method="post">
          <button onClick={this.onClick}>저장</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;

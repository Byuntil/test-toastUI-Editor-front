import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

function PostView(props) {
  const requestGet = () => {
    fetch("http:localhost:8080/toast?id=" + props.id, {
      method: "GET",
    })
      .then((response) => {
        response.json();
      })
      .then((response) => {
        return response.content;
      });
  };

  return (
    <div>
      <h1>Viewer</h1>
      <Viewer initialValue={requestGet} />
    </div>
  );
}

export default PostView;

import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
function PostView(props) {
  return <Viewer initialValue={props.value} />;
}

export default PostView;

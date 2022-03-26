import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";
const test = `# markdown`;
function PostView(props) {
  const value = props.value;
  if (value) {
    return <Viewer initialValue={test} />;
  } else {
    return <Viewer initialValue={test} />;
  }
}

export default PostView;

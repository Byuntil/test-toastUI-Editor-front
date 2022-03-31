import "@toast-ui/editor/dist/toastui-editor.css";
import { Component } from "react";
import MyComponent from "./Editor-Componet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Test Toast Editor</h1>
        <MyComponent />
      </div>
    );
  }
}

export default App;

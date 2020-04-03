import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          background: "lightgray",
          justifyContent:"center"
        }}
      >
        <Draggable
          axis="both"
          bounds=".ptkboard"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[25, 25]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}
        >
          <div className="handle">PTK</div>
        </Draggable>
        <div
          className="ptkboard"
          style={{ background: "gray", width: 240, height: 300 }}
        ></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.body);

import React, { Component } from "react";

class InlineResultComponent extends Component<any, any> {
  render() {
    let result = this.props.result;
    return (
      <div className="result">
        <p>{result}</p>
      </div>
    );
  }
}

export default InlineResultComponent;

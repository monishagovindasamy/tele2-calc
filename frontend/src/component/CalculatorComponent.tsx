import React, { Component } from "react";

class CalculatorComponent extends Component<any, any> {
  render() {
    return (
      <div className="button">
        <button name="1" onClick={(e) => this.props.onClick(e.target)}>
          1
        </button>
        <button name="2" onClick={(e) => this.props.onClick(e.target)}>
          2
        </button>
        <button name="3" onClick={(e) => this.props.onClick(e.target)}>
          3
        </button>
        <button
          name="+"
          onClick={(e) => this.props.onClick(e.target)}
          disabled={this.props.buttonControls.disableAdd}
        >
          +
        </button>
        <br />

        <button name="4" onClick={(e) => this.props.onClick(e.target)}>
          4
        </button>
        <button name="5" onClick={(e) => this.props.onClick(e.target)}>
          5
        </button>
        <button name="6" onClick={(e) => this.props.onClick(e.target)}>
          6
        </button>
        <button
          name="-"
          onClick={(e) => this.props.onClick(e.target)}
          disabled={this.props.buttonControls.disableSub}
        >
          -
        </button>
        <br />

        <button name="7" onClick={(e) => this.props.onClick(e.target)}>
          7
        </button>
        <button name="8" onClick={(e) => this.props.onClick(e.target)}>
          8
        </button>
        <button name="9" onClick={(e) => this.props.onClick(e.target)}>
          9
        </button>
        <button
          name="*"
          onClick={(e) => this.props.onClick(e.target)}
          disabled={this.props.buttonControls.disableMul}
        >
          x
        </button>
        <br />

        <button name="." onClick={(e) => this.props.onClick(e.target)}>
          ,
        </button>
        <button name="0" onClick={(e) => this.props.onClick(e.target)}>
          0
        </button>
        <button
          name="="
          onClick={(e) => this.props.onClick(e.target)}
          disabled={this.props.buttonControls.disableEqual}
        >
          =
        </button>
        <button
          name="/"
          onClick={(e) => this.props.onClick(e.target)}
          disabled={this.props.buttonControls.disableDiv}
        >
          ÷
        </button>
        <br />

        <button
          name="C"
          onClick={(e) => this.props.onClick(e.target)}
          style={{ width: "100%" }}
        >
          Clear
        </button>
        <br />
      </div>
    );
  }
}

export default CalculatorComponent;

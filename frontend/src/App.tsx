import React, { Component } from "react";
import axios, { AxiosError } from "axios";

import "./App.css";
import CalculatorComponent from "./component/CalculatorComponent";
import InlineResultComponent from "./component/InlineResultComponent";
import DisplayResultComponent from "./component/DisplayResults";
import { backendUrl } from "./constant";

class App extends Component<any, any> {
  operation: Operation | undefined;

  numbers: number[] = [];

  digits: string = "";

  child: React.RefObject<DisplayResultComponent>;

  constructor(props: any) {
    super(props);
    this.child = React.createRef<DisplayResultComponent>();
    this.state = {
      result: "",
      buttonControls: {
        disableAdd: false,
        disableSub: false,
        disableMul: false,
        disableDiv: false,
        disableEqual: true,
      },
    };
  }

  onClick = (event: HTMLButtonElement) => {
    const name = event.name;
    if (this.isNumeric(name) || name == ".") {
      this.digits += name;
      this.setState({
        result: this.state.result + name,
      });
      return;
    }
    switch (name) {
      case "+":
        return this.applyOperation(name, Operation.ADD);
      case "-":
        return this.applyOperation(name, Operation.SUBTRACT);
      case "*":
        return this.applyOperation(name, Operation.MULTIPLY);
      case "/":
        return this.applyOperation(name, Operation.DIVIDE);
      case "=":
        return this.calculate();
      case "C":
        return this.reset();
      default:
        break;
    }
  };

  isNumeric = (val: string): boolean => {
    return !isNaN(Number(val));
  };

  applyOperation(name: string, operation: Operation) {
    this.operation = operation;
    this.pushNumber();
    this.setState({
      result: this.state.result + name,
      buttonControls: {
        disableAdd:
          !(this.operation === Operation.ADD) || this.numbers.length >= 1,
        disableSub:
          !(this.operation === Operation.SUBTRACT) || this.numbers.length >= 1,
        disableMul:
          !(this.operation === Operation.MULTIPLY) || this.numbers.length >= 1,
        disableDiv:
          !(this.operation === Operation.DIVIDE) || this.numbers.length >= 1,
        disableEqual: this.numbers.length < 1 && !this.operation,
      },
    });
  }

  pushNumber() {
    if (this.digits) {
      this.numbers.push(Number(this.digits));
      this.digits = "";
    }
  }

  calculate = () => {
    this.pushNumber();
    const url = backendUrl + "/" + this.operation?.toString().toLowerCase();
    axios
      .get<Result>(url, {
        params: { input1: this.numbers[0], input2: this.numbers[1] },
      })
      .then((response) => {
        this.setState({ result: response.data.result });
        this.child.current?.fetchData();
      })
      .catch((error: AxiosError) => {
        console.error(error);
      });
  };

  reset = () => {
    this.digits = "";
    this.numbers = [];
    this.setState({
      result: "",
      buttonControls: {
        disableAdd: false,
        disableSub: false,
        disableMul: false,
        disableDiv: false,
        disableEqual: true,
      },
    });
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Tele2 Calculator</h1>
          <InlineResultComponent result={this.state.result} />
          <CalculatorComponent
            onClick={this.onClick}
            buttonControls={this.state.buttonControls}
          />
        </div>
        <div className="display-result">
          <DisplayResultComponent ref={this.child} />
        </div>
      </div>
    );
  }
}

export default App;

export enum Operation {
  ADD = "Addition",
  SUBTRACT = "Subtraction",
  MULTIPLY = "Multiplication",
  DIVIDE = "Division",
}

export interface Result {
  result: number;
}

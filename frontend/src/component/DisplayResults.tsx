import React, { Component } from "react";
import { Operation } from "../App";
import axios, { AxiosError } from "axios";
import { backendUrl } from "../constant";

export interface DisplayResult {
  id: number;
  input1: number;
  input2: number;
  result: number;
  operation: Operation;
}

class DisplayResultComponent extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      result: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const url = backendUrl + "/get-all";
    axios
      .get<DisplayResult[]>(url)
      .then((response) => {
        if(response.data.length >0 ) {
          this.setState({ result: response.data });
        }
      })
      .catch((error: AxiosError) => {
        console.error(error);
      });
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Input#1</th>
            <th>Input#2</th>
            <th>Result</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {this.state.result.map((item: any) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.input1}</td>
              <td>{item.input2}</td>
              <td>{item.result}</td>
              <td>{item.operation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default DisplayResultComponent;

import React from "react";
import Store from "./Store";
import { Container } from "flux/utils";

class Counter extends React.Component {
  static getStores() {
    return [Store];
  }

  static calculateState() {
    return {
      store: Store.getState(),
    };
  }

  render() {
    return (
      <>
        <div>counter:{this.state.store}</div>
        <button
          onClick={() => {
            Store.dispatcher.dispatch({ type: "increment" });
          }}
        >
          ++
        </button>
      </>
    );
  }
}

const container = Container.create(Counter);
export default container;

import { ReduceStore } from "flux/utils";
import { Dispatcher } from "flux";

class Store extends ReduceStore {
  constructor() {
    const dispatcher = new Dispatcher();
    super(dispatcher);
    this.dispatcher = dispatcher;
  }
  getInitialState() {
    return 0;
  }

  reduce(state, action) {
    switch (action.type) {
      case "increment":
        return state + 1;

      case "square":
        return state * state;

      default:
        return state;
    }
  }
}

export default new Store();

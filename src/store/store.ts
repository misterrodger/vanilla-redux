export class Store {
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };
  private subscribers: Function[];

  constructor( reducers = {}, initialState = {}) {
    this.reducers = reducers;
    this.state = this.reduce(initialState, {})
    this.subscribers = [];
  }

  get value() {
    return this.state;
  }

  subscribe(fn) {
    this.subscribers = [...this.subscribers, fn];
    this.notify()
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== fn)
    }
  }

  private notify() {
    this.subscribers.forEach(fn => fn(this.value))
  }

  dispatch(action) {
    this.state = this.reduce(this.state, action)
    this.notify();
  }

  private reduce(state, action) {
    const newState = {};
    for (const prop in this.reducers) {
      newState[prop] = this.reducers[prop](state[prop], action);
    }
    return newState;
  }
}

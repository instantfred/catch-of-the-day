import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";
import base from "../base";

class App extends React.Component {
  // Any function the updates the state needs to live where the state is defined
  state = {
    fishes: {},
    order: {},
  };

  static propTypes = {
    match: PropTypes.object,
  };

  componentDidMount() {
    const { params } = this.props.match;
    // reinstate localstorage so we don't loose our data with every refresh or component mount
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes",
    });
  }

  componentDidUpdate() {
    // JSON.stringify converts our object into a readable string
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    // every time I go back to the store selection screen, the state ref is unmounted to prevent a memory leak
    // this way we only work with a state ref at a time
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    // To update the state we need to do the following:
    // 1. Take a copy of the existing state. We never want to update our state directly
    const fishes = { ...this.state.fishes };
    // 2. Add any new element to our copy variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({
      fishes: fishes,
    });
  };

  updateFish = (key, updatedFish) => {
    const fishes = { ...this.state.fishes };
    fishes[key] = updatedFish;
    this.setState({ fishes });
  };

  deleteFish = (key) => {
    const fishes = { ...this.state.fishes };
    // In order to delete an object in Firebase we need to set it to null
    fishes[key] = null;
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    // this is the json data we imported, so we are just adding it to the state
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    // 1. Create a copy of the current state
    const order = { ...this.state.order };
    // 2. Add an order or update the order quantity for a key
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our current state
    this.setState({ order: order });
  };

  removeFromOrder = (key) => {
    const order = { ...this.state.order };
    // Since the order is not being mirrored by Firebase we don't need th null here
    delete order[key];
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {/* react needs a unique identifier when looping elements, that why we pass down key inside the tag */}
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}
        />
      </div>
    );
  }
}
export default App;

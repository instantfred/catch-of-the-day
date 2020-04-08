import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component {

  // Any function the updates the state needs to live where the state is defined
  state = {
    fishes: {},
    order: {}
  };
  addFish = (fish) => {
    // To update the state we need to do the following:
    // 1. Take a copy of the existing state. We never want to update our state directly
    const fishes = { ...this.state.fishes };
    // 2. Add any new element to our copy variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({
      fishes: fishes
    });
  };

  loadSampleFishes = () => {
    // this is the json data we imported, so we are just adding it to the state
    this.setState({ fishes: sampleFishes });
  };

  render(){
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
}
export default App;
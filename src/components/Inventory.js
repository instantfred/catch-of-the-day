import React from 'react';
import AddFishForm from './AddFishForm'

class Inventory extends React.Component {
  render () {
    return (
      <div className='inventory'>
        <h2>Inventory</h2>
        {/* we pass the function using props, so thats why we need to invoke them here */}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Add Fish Form</button>
      </div>
    )
  }
}

export default Inventory;
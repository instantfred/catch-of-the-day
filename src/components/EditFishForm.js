import React from 'react';

class EditFishForm extends React.Component {
  handleChange = event => {
    // 1. Take a copy of current fish
    // Here we pass down the fish we want to update, then dynamically read the attribute
    // that we are edition in the UI. That's why we need the name property for every input
    const updatedFish = {
      ...this.props.fish,
      [event.currentTarget.name]: event.currentTarget.value
     };
     // to get the key we need to pass it down as index, sine the object itself is not aware of its key within the array of elements
     this.props.updateFish(this.props.index, updatedFish);
  };

  render () {
    return (
      <div className='fish-edit'>
        <input type='text' name='name' value={this.props.fish.name} onChange={this.handleChange} />
        <input type='text' name='price' value={this.props.fish.price} onChange={this.handleChange} />
        <select type='text' name='status' value={this.props.fish.status} onChange={this.handleChange}>
          <option value='available'>Fresh</option>
          <option value='unavailable'>Sold out</option>
        </select>
        <textarea name='desc' value={this.props.fish.desc} onChange={this.handleChange} />
        <input type='text' name='image' value={this.props.fish.image} onChange={this.handleChange} />
        {/* Here we can do the inline delete call, or create a handleDelete */}
        <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
      </div>
    )
  }
}

export default EditFishForm;
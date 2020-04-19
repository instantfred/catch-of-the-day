import React from 'react';

class EditFishForm extends React.Component {
  handleChange = event => {
    // 1. Take a copy of current fish
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
      </div>
    )
  }
}

export default EditFishForm;
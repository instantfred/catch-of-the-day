// its a good practice to name the components with the same class name
// we'll always need to import react into our components
import React from 'react';

// every component is a class, components are basically elements that have the potencial to be repeated in the web page
class StorePicker extends React.Component {
  render(){
    return (
      <form className='store-selector'>
        <h2>Please enter a store</h2>
        <input type='text' required placeholder='Store name' />
        <button type='submit'>Visit Store</button>
      </form>
    )
  }
}

// we need to export the component so that it is usable outside its own scope
export default StorePicker;
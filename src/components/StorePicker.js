// its a good practice to name the components with the same class name
// we'll always need to import react into our components
import React from "react";
import { getFunName } from "../helpers";

// every component is a class, components are basically elements that have the potencial to be repeated in the web page
class StorePicker extends React.Component {
  myInput = React.createRef();

  // using goToStore as a property since by default they are bound to the instance so we have access to 'this' (StorePicker)
  // useful when I need 'this' inside a custom function
  goToStore = (event) => {
    // This stops the form from submitting since we are not working with a server rigth now
    event.preventDefault();
    // Get the input value from the form
    const storeName = this.myInput.current.value;
    // Update the url using our input value
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

// we need to export the component so that it is usable outside its own scope
export default StorePicker;

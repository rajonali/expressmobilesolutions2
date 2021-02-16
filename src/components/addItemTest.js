  //import stuff
  import React, { Component } from 'react';
  import firebase from "gatsby-plugin-firebase"



  //the class you are making your component from
  class AddItemTest extends Component {
    // constructor to set state and bind "this"
    constructor(props) {
        super(props);
        this.state = {showModal: false};
        this.fetchStore = this.fetchStore.bind(this);
      }



    fetchStore(e) {
    e.preventDefault()
    firebase
      .firestore()
      .collection("items")
      .add({
        name: "dsadas",
        type: "beer",
        qty: 5,
        description:
          "Pale lager beer with 5% alcohol by volume produced by the Dutch brewing company Heineken International",
      })
      .then(ref => {
        console.log("Added document with ID: ", ref.id)
      })
    }
  
  
  
  
    // function to handle the click
     handleClick() {
      this.setState(prevState => ({
        showModal: !prevState.showModal
      }));
    }
    
    // the render() method to put stuff into the DOM
    render() {
      // the modal you will toggle on and off
      const modal = (
        <div className="modal">
          Hello, my name is Godzilla
        </div>
      );
      
      // the return() to put your default HTML into the DOM
      return (
          // wrapper div of component
          <div className="about">
    <button onClick={(e) => {this.fetchStore(e)}}>add item</button>
          </div>
      );
    }
  }
  // export the class so you can call it elsewhere
  export default AddItemTest;
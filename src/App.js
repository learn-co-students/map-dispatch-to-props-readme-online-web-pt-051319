import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {
//handleOnClick() dispatches an action to the store
  handleOnClick() {
    //this.props.store.dispatch(addItem());
    this.props.addItem()
  }

  render() {
    return (
      <div className="App">
        {/* <button onClick={(event) => this.handleOnClick(event)}> */}
        <button onClick={this.handleOnClick}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: () => {
      dispatch(addItem())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// or export default connect(mapStateToProps, { addItem })(App) if you get rid of mapDispatchToProps()

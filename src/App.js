import React, {Component} from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count:0,
      isDouble: false,
      changeIncrement: "Single Increments"
    };
  }

  increment = () => {
    if(this.state.count < 20){
      
      if(this.state.isDouble && this.state.count !== 19){
        this.setState ({
          count: this.state.count + 2
        })
      } else if (!this.state.isDouble) {
        this.setState ({
          count: this.state.count + 1
        })
      }
    }
  }

  decrement = () => {

    if(this.state.count > 0){
      this.setState ({
        count: this.state.count - 1
      })
    }
  }

  clear = () => {
    this.setState ({
      count: 0
    })
  }

  toggle = () => {

    this.setState ({
      isDouble: !this.state.isDouble
    })

    if(this.state.isDouble){
      this.setState ({
        changeIncrement: "Double Increments"
      });
    } else {
      this.setState ({
        changeIncrement: "Single Increments"
      });
    }

  }

  render () {
    return(
      <div className = 'container'>
        <div className = 'navbar'>Counter.js</div>
        <div className = 'counter'>
          <h1>{this.state.count}</h1>
          <button type = 'button' onClick = {this.increment}>Increment</button>
          <button type = 'button' onClick = {this.decrement}>Decrement</button>
          <button type = 'button' onClick = {this.clear}>clear</button>
          <button type = 'button' onClick = {this.toggle}>{this.state.changeIncrement}</button>
        </div>
      </div>
    )
  }
}

export default Counter;
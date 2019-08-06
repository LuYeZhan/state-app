import React, { Component } from 'react'

class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      number: 0,
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.number}</p>
      </div>
    )
  }
}

export default Counter;

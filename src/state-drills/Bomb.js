import React, { Component } from 'react'

export default class Bomb extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    console.log("unmounted")
    clearInterval(this.interval)
  }

  renderDisplay() {
    const { count } = this.state
    if (count >= 8) {
        console.log(this.interval);
        clearInterval(this.interval);
        console.log(this.interval);
        return 'BOOM!!!!'
    } else if (count % 2 === 0) {
        console.log(this.interval);
        return 'tick'
    } else {
        console.log(this.interval);
        return 'tock'
    }
  }

  render() {
    return (
      <div className='CountdownBomb'>
        {this.renderDisplay()}
      </div>
    )
  }
}
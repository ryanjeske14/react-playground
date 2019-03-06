import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: "world"
    }
    handleButtonClick = () => {
        /*console.log('props in handleButtonClick', this.props)
        console.log('state in handleButtonClick', this.state)
        this.setState({ count: this.state.count + this.props.step })*/
        console.log('clicked')
    }
    render() {
      return (
        <div>
          <p>Hello, {this.state.who}!</p>
          <button onClick={() => this.setState({ who: "world"})}>
             World
          </button>
          <button onClick={() => this.setState({ who: "friend"})}>
             Friend
          </button>
          <button onClick={() => this.setState({ who: "React"})}>
             React
          </button>
        </div>
      )
    }
  }

  export default HelloWorld
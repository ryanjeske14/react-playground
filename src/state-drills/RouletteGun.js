import React, { Component } from 'react'

export default class RouletteGun extends Component {
    static defaultProps = {
        bulletInChamber: 8
    }
  
    state = {
        chamber: null,
        spinningTheChamber: false
    };

    handleButtonClick = () => {
        this.setState({ spinningTheChamber: true });
        this.timeout = setTimeout(() => {
            this.setState({ chamber: Math.ceil(Math.random() * 8)} );
            console.log(`Random number: ${this.state.chamber}`);
            this.setState({ spinningTheChamber: false })
        }, 2000)

    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    renderDisplay() {
        if (this.state.spinningTheChamber === true) {
            return 'spinning the chamber and pulling the trigger!'
        }
        else if (this.props.bulletInChamber === this.state.chamber) {
            return 'BANG!!!!'
        } 
        else if (this.props.bulletInChamber !== this.state.chamber) {
            return 'you\'re safe!'
        }
    }

    render() {
        return (
            <div>
                <p>{this.renderDisplay()}</p>
                <button onClick={this.handleButtonClick}>
                    Pull the trigger!
                </button>
            </div>
      )
  }
}
import React, { Component } from 'react'

export default class Accordion extends Component {
    static defaultProps = {
        sections: []
    }
    state = {
        currentSectionIndex: null
    }

    handleButtonClick(index) {
        this.setState({ currentSectionIndex: index })
    }
    renderListItems() {
        const { currentSectionIndex } = this.state;
        return this.props.sections.map((section, index) => (
            <li key={index}>
                <button key={index} onClick={() => this.handleButtonClick(index)}>
                    {section.title}
                </button>
                {(currentSectionIndex === index) && <p>{section.content}</p>}
            </li>
        ))
    }
    
    render() {
        return (
            <ul>
                {this.renderListItems()}
            </ul>
        )
    }

}
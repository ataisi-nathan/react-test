import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 5,
        tags: ['tag1', 'tag2', 'tag3']
    }

    constructor() {
        super();
        this.handle = this.handle.bind(this);
    }

    handle () {
        this.setState({ count: this.state.count +1})
    }

    render() { 
        return (
            <>
                <h2>{this.state.count}</h2>
                <button onClick={this.handle}>Increment</button>

                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>

            </>
        );
    }
}
 
export default Counter;
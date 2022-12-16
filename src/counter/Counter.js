
import React from "react";

class Counter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {counter:0}
    }
    Counters = () => {
        this.setState({counter:this.state.counter + 1})
    }
    render() {
        return(
            <div>
               <button  onClick={this.Counters}>plus</button>
                <span>{this.state.counter}</span>
            </div>
        )
    }
}
export default Counter;
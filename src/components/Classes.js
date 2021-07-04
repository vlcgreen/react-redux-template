import React, { Component } from 'react';
import { connect } from 'react-redux';
import {increment} from '../actions/templateActions'


class Classes extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title: ""
        }
    }
    
    render() {
        
        return (
            <div>
                <h1>{this.state.title}</h1>

                <h3>{this.props.count}</h3>

                <button onClick={this.props.increment}>Click Me to update Global state</button>
            </div>
        )
        }
}

//useSelector => mapStateToProps
//useDispatch => mapDispatchToProps
//const counter = useSelector(state => state.template.counter);

function mapStateToProps(state) {
    return {
        count: state.template.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return{
        increment: () =>(dispatch(increment(4)))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Classes);

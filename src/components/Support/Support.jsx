import React, {Component} from 'react'
import { connect } from 'react-redux'

class Support extends Component {

    componentDidMount = () => {
        this.setState({
            currentInput: this.props.reduxState.supportReducer
        })
    }

    state = {
        currentInput: ''
    }

    handleChange = (event) => {
        this.setState({
            currentInput: event.target.value
        })
        console.log(this.state.currentInput)
    }


    handleClick = () => {
        if    (this.state.currentInput === '1' 
            || this.state.currentInput === '2' 
            || this.state.currentInput === '3' 
            || this.state.currentInput === '4' 
            || this.state.currentInput === '5') {
        console.log('you going to plants');
        this.props.dispatch({type: "SET_SUPPORT", payload: this.state.currentInput})
        this.props.history.push('/comment')
      } else {
        alert('Select one option before clicking next.')
    }
}
    render() {
        return(
            <>
            <h3>How supported do you feel today?</h3>
            {/* <p>Help im drowning :     1 - 2 - 3 - 4 - 5 : Nothing but help</p> */}
            <div className="radioTown" onChange={this.handleChange}>
                <h5>Help I'm drowning :</h5>
                1 <input className="radioBtn" type="radio" value="1" name="support" defaultChecked={this.props.reduxState.supportReducer === "1"}/> 
                2 <input className="radioBtn" type="radio" value="2" name="support" defaultChecked={this.props.reduxState.supportReducer === "2"}/> 
                3 <input className="radioBtn" type="radio" value="3" name="support" defaultChecked={this.props.reduxState.supportReducer === "3"}/> 
                4 <input className="radioBtn" type="radio" value="4" name="support" defaultChecked={this.props.reduxState.supportReducer === "4"}/> 
                5 <input className="radioBtn" type="radio" value="5" name="support" defaultChecked={this.props.reduxState.supportReducer === "5"}/> 
                <h5>: Help coming out me ears </h5>
            </div>

            {/* <input type="number" className="input" onChange={this.handleChange} /> */}
            <button  className="btn btn-primary" onClick={this.handleClick}>next</button>
            </>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapStateToProps)(Support);
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {shuffleLunches} from '../actions/lunchActions';

class Lunches extends Component {   
    render() {
        console.log("props",this.props);      
        return (
            <div>
                <h1>Lunches</h1>
                <button onClick={() => this.props.shuffleArray(this.props.lunches)}>shuffle</button>
                <div className="lunchWrap">
                     
                    {this.props.lunches.map((lunch, index) => {
                    return (
                        <div className="lunch" key={index}>
                            <div className="title">{lunch.name} - {index}</div>
                            <div className="subTitle">food place with a {lunch.rating} rating</div>
                        </div>
                    )
                    })}
                </div>
            </div>
        )        
    }
}

function mapStateToProps(state, ownProps) {
    return {
        lunches: state.lunches
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        shuffleArray: (ownProps) => {
            console.log('shuffling from dispatch', ownProps);
            dispatch(shuffleLunches(ownProps));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lunches);
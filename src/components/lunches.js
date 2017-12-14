import React, {Component} from 'react';
import { connect } from 'react-redux';
import {shuffleLunches, deleteItem} from '../actions/lunchActions';

class Lunches extends Component {   
    render() {
        // console.log("props",this.props);      
        return (
            <div>
                <h1>Lunches</h1>
                <button onClick={() => this.props.shuffleArray(this.props.lunches)}>shuffle</button>
                <br/><br/>
                <div className="lunchWrap">           
                    {this.props.lunches.map((lunch, index) => {
                    return (
                        <div className="lunch" key={index}>
                            <button className="delLunch" onClick={() => this.props.deleteLunch(index)}>X</button>
                            <div className="title">{lunch.name} - {index}</div>

                            {lunch.rating ?  <div className="subTitle">food place with a {lunch.rating} rating</div> : '' }
                            
                            {lunch.meals.length > 0 ? lunch.meals.map((meal, index) => {
                                return ('meals: ' + meal.name)   
                            }) : ''}

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
            dispatch(shuffleLunches(ownProps));
        },
        deleteLunch: (ownProps, index) => {
            dispatch(deleteItem(ownProps, index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lunches);
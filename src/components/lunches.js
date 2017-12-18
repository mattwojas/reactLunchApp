import React, {Component} from 'react';
import { connect } from 'react-redux';
import {shuffleLunches, deleteItem, addMealItem} from '../actions/lunchActions';
import AddMealItemForm from '../components/addMeal';

class Lunches extends Component {   
    render() {
        // console.log("props",this.props);    
        function showIt(e, index){
            let el = document.getElementsByClassName(`hidden_${index}`);
            let clickedEl = document.getElementsByClassName(`show_${index}`)
            clickedEl[0].classList.toggle('showOpen');
            el[0].classList.toggle('showHidden');
        }
        
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
                            <div className="title"><h2>{lunch.name} - {index}</h2></div>

                            {lunch.rating ?  <div className="subTitle">food place with a {lunch.rating} rating</div> : '' }
                            
                            {lunch.meals.length > 0 ? lunch.meals.map((meal, index) => {
                                return (
                                    <div key={index} className="mealItem">
                                        <h3>{meal.name}</h3>
                                        </div>
                                    )   
                                }) : ''
                            }                                
                            <div className="showHideToggle">
                                <div className={`show show_${index}`} onClick={(e) => showIt(e, index)}>Add Meal</div>
                                <div className={`hidden hidden_${index}`}>
                                    Meal Adder
                                    <AddMealItemForm itemNum={index}/>
                                </div>
                            </div>
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
        },
        addMeal:(ownProps, index) => {
            dispatch(addMealItem(ownProps, index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lunches);
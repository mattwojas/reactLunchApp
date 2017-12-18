import React from 'react';
import { connect } from 'react-redux';
import {addMealItem} from '../actions/lunchActions';
import PropTypes from 'prop-types';

//class AddItemForm extends Component {
let AddMealItemForm = ({ dispatch, itemNum }) => {    
    let mealName;    
    console.log('show me the props', itemNum);
    return (
       <div className="addMealForm">
            <form onSubmit={e => {
                e.preventDefault()
                if(!mealName.value.trim()){
                    alert('please add a meal name!');
                    return;
                }
                dispatch(addMealItem(itemNum, mealName.value))
                mealName.value = ''                
            }} className="form">
                <input 
                    type="text" 
                    placeholder="Name"
                    ref={node => {
                        mealName = node
                    }}
                />             
                <button type="submit" className="addMealItem">Add Meal for {}</button>
            </form>
       </div>
    )    
}

AddMealItemForm.propTypes = {
    itemName: PropTypes.number
}

AddMealItemForm = connect()(AddMealItemForm);


export default AddMealItemForm;
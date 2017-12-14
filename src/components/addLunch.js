import React from 'react';
import { connect } from 'react-redux';
import {addItem} from '../actions/lunchActions';

//class AddItemForm extends Component {
let AddItemForm = ({ dispatch }) => {    
    let input1, input2;
    return (
        <form onSubmit={e => {
            e.preventDefault()
            if(!input1.value.trim()){
                return
            }
            dispatch(addItem(input1.value))
            input1.value = ''
        }} className="form">
            <input 
                type="text" 
                placeholder="Name"
                ref={node => {
                    input1 = node
                }}
            />
            <input type="text" placeholder="rating"/>
            <button type="submit" className="addItem">Add Lunch</button>
        </form>
    )    
}

AddItemForm = connect()(AddItemForm)

export default AddItemForm;
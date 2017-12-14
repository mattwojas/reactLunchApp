import React from 'react';
import { connect } from 'react-redux';
import {addItem} from '../actions/lunchActions';

//class AddItemForm extends Component {
let AddItemForm = ({ dispatch }) => {    
    let input1, input2;
    return (
       <div className="addLunchForm">
            <form onSubmit={e => {
                e.preventDefault()
                if(!input1.value.trim()){
                    alert('please add a lunch place name!');
                    return;
                }
                dispatch(addItem(input1.value, input2.value))
                input1.value = ''
                input2.value = ''
            }} className="form">
                <input 
                    type="text" 
                    placeholder="Name"
                    ref={node => {
                        input1 = node
                    }}
                />
                <input 
                type="text" 
                placeholder="Rating"
                ref={node => {
                    input2 = node
                }}
            />
                <button type="submit" className="addItem">Add Lunch</button>
            </form>
       </div>
    )    
}

AddItemForm = connect()(AddItemForm)

export default AddItemForm;
import React from 'react';
import Formgroup from './Formgroup'


function Form() {
    return (
        <form>
            <Formgroup label="Task:"/>
            <Formgroup label="Category:"/>
            <div className="form-group">
            <label>Task Notes:</label>
            <textarea className="form-control"></textarea>
            </div>
            
        </form>
      
        
    )
}

export default Form;
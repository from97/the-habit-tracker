import React, { Component } from 'react';

class Controls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'add'
        }
    }
    getControls() {
        var control_content = 
            <input type='text' name='new_habit' className='add_content'></input>
        var control_button;
        if (this.state.mode === 'add') {
            control_button = 
                <input type='submit' name='add' className='add_button' value='add'></input>
        }
        else if (this.state.mode === 'edit') {
            control_button = 
                <input type='submit' name='save' className='add_button' value='save'></input>
        }
        var controls = 
            <form>
                {control_content}
                {control_button}
            </form>
        return (controls);
    }
    render() {
        return (
            <div className='controls'>
                <h3>{this.state.mode}</h3>
                {this.getControls()}
            </div>
        );
    }
}

export default Controls;
import React, { Component } from 'react';

class Controls extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    getControls() {
        var control_content = 
            <input type='text' name='new_habit' className='add_content'></input>
        var control_button;
        if (this.props.mode === 'add') {
            control_button = 
                <input type='submit' name='button' className='add_button' value='add'></input>
        }
        else if (this.props.mode === 'edit') {
            control_button = 
                <input type='submit' name='button' className='add_button' value='save'></input>
        }
        var controls = 
            <form action='/create_process' method='post'
                onSubmit={function(e){
                    e.preventDefault();
                }.bind(this)}
            >
                {control_content}
                {control_button}
            </form>
        return (controls);
    }
    render() {
        return (
            <div className='controls'>
                <h3>{this.props.mode}</h3>
                {this.getControls()}
            </div>
        );
    }
}

export default Controls;
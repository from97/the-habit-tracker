import React, { Component } from 'react';

class Controls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    getControls() {
        var control_content = 
            <input type='text' name='new_habit' className='add_content'></input>
        var control_button;
        if (this.props.mode === 'add') {
            control_button = 
                <input type='submit' name='button' className='save_button' value='add'></input>
        }
        else if (this.props.mode === 'edit') {
            control_button = 
                <input type='submit' name='button' className='save_button' value='save'></input>
        }
        var controls = 
            <div>
                <h3 className="control_head">{this.props.mode}</h3>
                <form action='/create_process' method='post'
                    onSubmit={function(e){
                        e.preventDefault();
                    }.bind(this)}
                >
                    {control_content}
                    {control_button}
                </form>
            </div>
        return (controls);
    }
    render() {
        return (
            <div className='controls'>
                <p 
                    className='add_button' 
                >+</p>
                { this.state.isOpen && this.getControls() }
            </div>
        );
    }
}

export default Controls;
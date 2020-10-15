import React, { Component } from 'react';

class Controls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'add',
            id: this.props.data.id,
            title: this.props.data.title
        }
    }
    getControls() {
        var control_content = 
            <input type='text' name='new_habit' className='add_content'></input>
        if (this.state.mode === 'add') {
            control_button = 
                <input type='submit' name='add' className='add_button' value='add'></input>
        }
        else if (this.state.mode === 'edit') {
            control_button = 
                <input type='submit' name='save' className='add_button' value='save'></input>
        }
        controls = 
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
import React, { Component } from 'react';

class Controls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'create',
            id: this.props.data.id,
            title: this.props.data.title
        }
    }
    getControls() {
        var control_content = 
            <input type='text' name='new_habit' className='add_content'></input>
        if (this.state.mode === 'create') {
            control_button = 
                <input type='submit' name='add' className='add_button' value='add'></input>
        }
        else if (this.state.mode === 'update') {
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
                {this.getControls()}
            </div>
        );
    }
}

export default Controls;
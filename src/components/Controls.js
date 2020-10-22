import React, { Component } from 'react';

class Controls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    getControls(mode) {
        var control_content;
        var control_button;
        if (mode === 'add') {
            control_content = 
                <input type='text' name='add_habit' className='add_content'></input>
            control_button = 
                <input type='submit' name='button' className='add_button' value='add'></input>
        }
        else if (mode === 'edit') {
            control_content = 
                <input type='text' name='edit_habit' className='edit_content'></input>
            control_button = 
                <input type='submit' name='button' className='save_button' value='save'></input>
        }
        var controls = 
            <div>
                <h3 className="control_head">{mode}</h3>
                <form action='/create_process' method='post'
                    onSubmit={function(e){
                        e.preventDefault();
                        var mode = e.target.button.value;
                        var habit;
                        if (mode === 'add') 
                            habit = e.target.add_habit.value;
                        else
                            habit = e.target.edit_habit.value;
                        this.props.onChangeList(mode, habit);
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
                    className='show_add_content'
                    onClick={function(e){
                        var add_button = e.target;
                        if (this.state.isOpen) {
                            add_button.innerHTML = '+';
                            this.setState({isOpen : false});
                        }
                        else {
                            add_button.innerHTML = '-';
                            this.setState({isOpen : true});
                        }
                    }.bind(this)} 
                >+</p>
                { this.state.isOpen && this.getControls('add') }
                { this.getControls('edit') }
            </div>
        );
    }
}

export default Controls;
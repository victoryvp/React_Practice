import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {
    state = {
        title: ''
    }
    onSubmit = (e) => {
        //console.log(this.state.title);
        e.preventDefault();
        this.props.addTodoFn(this.state.title);
        this.setState({ title: '' })
    }
    onChange = (e) => {
        // console.log(e.target.value);
        this.setState({ title: e.target.value });
    }
    render() {
        return (
            <form style={{ display: 'flex' }}>
                <input
                    type='text'
                    name="title"
                    placeholder="Add To do..."
                    style={{ flex: '10', padding: '5px' }}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input type="submit" value="submit" className="btn" style={{ flex: '1' }} />
            </form>
        )
    }
}


AddTodo.propType = {
    addTodoFn: PropTypes.func.isRequired
}
export default AddTodo

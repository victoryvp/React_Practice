import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItems extends Component {
    getMyStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '8px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todoItemsProp.completed?'line-through':'none'
        }
    }
    // markCompleteFn=(e)=> {
    //     console.log(this.props);
    // }
    render() {
        //eslint-disable-next-line
        const { id, title}= this.props.todoItemsProp;//unpacking
        return (
            <div style={this.getMyStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.markCompleteFn.bind(this,id)}/> {'  '}
                    {this.props.todoItemsProp.title}
                    <button onClick = {this.props.delItem.bind(this,id)} style={deleteStyle}> X </button>
                    </p>
            </div>
        );
    }
}

TodoItems.propType = {
    todoItemsProp: PropTypes.array.isRequired,
    markCompleteFn: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired
}

const deleteStyle ={
    background: 'ff0000',
    color : 'red',
    border: 'none',
    padding: '5px 8px',
    borderRadius : '50%',
    cursor: 'pointer',
    float: 'right'
}
export default TodoItems

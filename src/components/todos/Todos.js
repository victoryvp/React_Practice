import React, { Component } from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types';

class Todos extends Component {
    // markCompleteFn=()=>{
    //     console.log("Hari");
    // }
    render() {
        console.log("Todos");
        // console.log(this.props.todosProp.map((i)=>(
        // <h3>{i.title}</h3>
        // )));
        return this.props.todosProp.map((i) => (
            <TodoItems key={i.id} todoItemsProp={i} markCompleteFn={this.props.markCompleteFn} delItem={this.props.delItem} />
        ));
    }
}

Todos.propTypes = {
    todosProp: PropTypes.array.isRequired,
    markCompleteFn: PropTypes.func.isRequired,
    delItem: PropTypes.func.isRequired
}
export default Todos;

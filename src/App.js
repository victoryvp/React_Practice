import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';
import Header from './components/layout/Header';
//import { v4 as uuid } from 'uuid';
import About from './components/Pages/About';
import axios from 'axios';


class App extends Component {
  state = {
    todos: [
      // {
      //   id: uuid.v4,
      //   title: 'Creating Front end',
      //   completed: false
      // },
      // {
      //   id: uuid.v4,
      //   title: 'Creating design using UIUX',
      //   completed: true
      // },
      // {
      //   id: uuid.v4,
      //   title: 'AWS Template Execution',
      //   completed: false
      // }
    ]
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  //toggle complete
  markCompleteFn = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  //Delete the selected Item
  delItem = (id) => {
    //console.log(id);
    //eslint-disable-next-line
    axios.delete('https://jsonplaceholder.typicode.com/todos/${id}')
    .then(res=> this.setState({todos:[...this.state.todos.filter(todo => todo.id!==id)]}));

    ////Working Code
    //const new_todos = this.state.todos.filter(todo => { return todo.id !== id });
    // this.setState({
    //   todos: [...new_todos]
    // });
  }

  //Adding Todolist Item

  addTodoFn = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,
      completed: false
    })
    .then(res => this.setState({todos: [...this.state.todos,res.data]}));
    //console.log(title);//Didn't get that value and Should work if the submit button works properly
    // const newTodo = {
    //   id: uuid.v4,
    //   title: title,
    //   completed: false
    // }
    // this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    //console.log("AT APP JS");
    //console.log(this.state.todos);
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path="/" render={prop => (
              <React.Fragment>
                <AddTodo addTodoFn={this.addTodoFn} />
                <Todos todosProp={this.state.todos} markCompleteFn={this.markCompleteFn} delItem={this.delItem} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App;

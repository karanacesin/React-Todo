import React from 'react';
import './components/Todo.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const todo = [];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      projects:todo
    }
  }

  addProject = project => {
    const newProject = {
      name: project,
      id: project.index,
      done: false
    };
    this.setState({
      projects: [...this.state.projects, newProject]
    });
  };

  toggleItem = projectId => {
    
    this.setState({
      projects: this.state.projects.map(item => {
        if (item.index === projectId) {
          return {
            ...item,
            done: !item.done
          };
        } else {
          return item;
        }
      })
    });
  };

  clearDone = () =>{

    this.setState({
      projects: this.state.projects.filter(item => !item.done)

    })
    
  }


  render() {
    return (
      <div>
        <div>
          <h1 className='head'>Todo List!</h1>
        </div>

        <div>
          <TodoForm 
          addProject={this.addProject}
          />
        </div>

        <div>
          <TodoList 
          todo={this.state.projects}
          toggleItem={this.toggleItem}
          clearDone={this.clearDone}
          />
        </div>
      </div>
    );
  }
}

export default App;

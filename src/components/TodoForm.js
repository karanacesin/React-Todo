import React from "react";
import './Todo.css';

class TodoForm extends React.Component {
  
  constructor() {
    super();
    this.state = {
      newProject: ""
    };
  }

  handleChanges = e => {
    this.setState({
      newProject: e.target.value
    });
  };

  handleSubmit = e=> {
      e.preventDefault();
      this.props.addProject(this.state.newProject)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="item"
          value={this.state.newProject}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;

import React from "react";
import Todo from "./Todo";
import './Todo.css';

const TodoList = props => {
  
  return (
    <div >
      {props.todo.map(item => (
        <Todo toggleItem={props.toggleItem} key={item.index} item={item} />
      ))}
      <button  onClick={props.clearDone}>
        Clear Finished
      </button>
    </div>
  );
};

export default TodoList;

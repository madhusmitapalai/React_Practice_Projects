import React, { useState } from "react";
import "./TodoForm.css";
import Todo from "./Todo";
const TodoForm = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const itemEvent = (event) => {
    setInput(event.target.value);
  };
  const itemEventsetting = () => {
    setItem((olditem) => {
      return [...olditem, input];
    });
    setInput("");
  };
  const deleteItem = (id) => {
    console.log("hello delete");
    setItem((oldItems) => {
      return oldItems.filter((val, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="todo_form" onSubmit={handleSubmit}>
      <div className="center_div" >
        <h1 className="text-center" data-aos='fade-down-right'>
          todo list
        </h1>
        <input
          type="text"
          value={input}
          onChange={itemEvent}
          placeholder="Add a Todo"
          name="text"
          className="todo_input text-center"
        />
        <button className="todo_btn" onClick={itemEventsetting}>
          Add Todo
        </button>
        <ol>
          {item &&
            item.map((interval, index) => {
              return (
                <Todo
                  key={index}
                  id={index}
                  interval={interval}
                  onSelect={deleteItem}
                />
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default TodoForm;

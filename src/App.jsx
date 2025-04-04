import React, { useState } from "react";

export default function App() {
  const [task, setTask] = useState([]);
  function onDeleteItems(id) {
    setTask((items) => items.filter((item) => item.id !== id));
  }
  function handleTasks(task) {
    setTask((tasks) => [...tasks, task]);
  }

  return (
    <div className="app">
      <Logo />
      <InputField task={handleTasks} />
      <List task={task} onDeleteItems={onDeleteItems} />
    </div>
  );
}

function Logo() {
  return <h1>ToDo List</h1>;
}

function InputField({ task }) {
  const [newTask, setNewTask] = useState("");

  function addTask() {
    const item = { id: Date.now(), newTask };
    task(item);
    setNewTask("");
  }
  return (
    <div className="add-form">
      <input
        type="text"
        placeholder="enter the task here..."
        value={newTask}
        onChange={(evt) => {
          setNewTask(evt.target.value);
        }}
      />
      <button type="submit" onClick={addTask}>
        Add
      </button>
    </div>
  );
}

function List({ task, onDeleteItems }) {
  const itemStyle = {};
  return (
    <div className="list">
      <ul>
        {task.map((t) => (
          <Task
            className={itemStyle}
            task={t}
            key={t.id}
            onDeleteItems={onDeleteItems}
          />
        ))}
      </ul>
    </div>
  );
}

function Task({ task, onDeleteItems }) {
  return (
    <li>
      <p>{task.newTask}</p>
      <button
        onClick={() => {
          {
            onDeleteItems(task.id);
          }
        }}
      >
        ❌
      </button>
    </li>
  );
}

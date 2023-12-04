"use client";
import { useState } from "react";
import classes from "@/styles/todolist.module.css";

const Page = () => {
  const [inputBox, setInputBox] = useState("");
  const [todoList, settodoList] = useState([]);

  const fetching = async () => {
    const response = await fetch("http://localhost:8501/home");
    const data = await response.json();
    console.log(data);
  };

  const postingdata = async () => {
    await fetching();
    const response = await fetch("http://localhost:3000/api/todolist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "todo" }),
    });
    const data = await response.json();

    const todoWorks = data.Todo_works.slice();
    let index = 0;
    const interval = setInterval(() => {
      if (index < todoWorks.length) {
        const updatedTodoList = todoWorks.slice(0, index + 1);
        settodoList(updatedTodoList);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 400);
  };

  return (
    <div className={classes.container}>
      <h1 data-test="input-todo-click-button" onClick={postingdata}>
        Todo list Page
      </h1>
      <div className={classes.input_box}>
        <input
          data-test="input-todo"
          type="text"
          name="Todo"
          id="Todo"
          placeholder={"Please fill your todos"}
          value={inputBox}
          onChange={(e) => setInputBox(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (inputBox === "") return;
              settodoList([...todoList, inputBox]);
              setInputBox("");
            }
          }}
        />
        <button
          data-test="btn-add-todo"
          onClick={() => {
            if (inputBox === "") return;
            settodoList([...todoList, inputBox]);
            setInputBox("");
          }}
        >
          +
        </button>
      </div>
      <div className={classes.todolist_items}>
        {todoList.length > 0 ? "TODO WORKS" : ""}
        {todoList.map((item, index) => (
          <div
            key={index}
            className={classes.todolist_item}
            data-test="todo-list"
          >
            {index + 1}. {item}
            <button
              data-test={`btn-delete-todo-${index}`}
              onClick={() => {
                const updatedTodoList = [...todoList];
                updatedTodoList.splice(index, 1);
                settodoList(updatedTodoList);
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

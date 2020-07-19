// src/components/Button.js

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTasks, addTask } from "./lib/redux";

export default function Button() {
  const tasks = useSelector((store) => store && store.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    getTasks(dispatch);
  }, [getTasks]);

  console.log(tasks, "tasks");

  if (!tasks || !tasks.data || tasks.data.loading) {
    return "Loading...";
  }

  return (
    <div className={`button1`}>
      <button onClick={() => dispatch(addTask(dispatch))}>Add Task</button>
      <ul>
        {tasks.data &&
          tasks.data.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
      </ul>
    </div>
  );
}

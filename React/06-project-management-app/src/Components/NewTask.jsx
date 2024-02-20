import React, { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  const [inputError, setInputError] = useState(false);

  function handleChange(event) {
    setEnteredTask(event.target.value);
    setInputError(false);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      setInputError(true);
      return;
    }else{
      setInputError(false);
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }
  
  let inputClasses = 'w-64 px-2 py-1 rounded-sm bg-stone-200';
  if(inputError){
    inputClasses = 'w-64 px-2 py-1 rounded-sm bg-red-100'
  }else{
    inputClasses = 'w-64 px-2 py-1 rounded-sm bg-stone-200'
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className={inputClasses}
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950 text-xs"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}

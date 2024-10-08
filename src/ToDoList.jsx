import React, { useState } from 'react';

function ToDoList() {

  const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {

    if(newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
    setNewTask("");
    }

    
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if(index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index -1]] = [updatedTask[index - 1], updatedTask[index]];
      setTasks(updatedTask)
    }
  }

  function moveTaskDown(index) {
    if(index < tasks.length - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
      setTasks(updatedTask)
    }
  }

  return(
    <>
      <div className='to-do-list'>
        <h1>To-DO-List</h1>

        <div>
          <input
           type="text"
           placeholder='Enter a task...'
           onChange={handleInputChange}
           value={newTask}
           onKeyDown={(event) => {
            if(event.key == "Enter") {
              addTask();
            }
           }}
           />
           <button 
              className='add-button'
              onClick={addTask}
              >
              Add
           </button>
        </div >

          <ol>
            {tasks.map((task, index) => 
              <li key={index}>
                <span className='text'>{task}</span>
                <button
                 className='delete-button'
                onClick={() => deleteTask(index)}>
                  Delete
                </button>
                <button
                 className='move-button'
                onClick={() => moveTaskUp(index)}>
                  ☝️
                </button>
                <button
                 className='move-button'
                onClick={() => moveTaskDown(index)}>
                  👇
                </button>
                </li>
            )}
          </ol>

      </div>
    </>
  )
}

export default ToDoList;
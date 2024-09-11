import React, { useState } from "react";

function App() {
  const [newList, setNewList] = useState("");
  const [updateList, setUpdateList] = useState([]);

  function handleOnChange(event) {
    const newValue = event.target.value;
    setNewList(newValue);
  }

  function handleClick() {
    setUpdateList((x) => {
      return [...x, newList];
    });
    setNewList("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleOnChange} value={newList} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {updateList.map((x) => {
            return <li>{x}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import First from "./components/First";

function App() {
  const [task, setTask] = React.useState([]);
  const [Str, setStr] = React.useState("");
  function Add() {
    if (Str.length > 0) {
      setTask(function (arr) {
        const tempArr = [...arr];
        tempArr.push(Str);
        return tempArr;
      });
      setStr("");
    }
  }
  console.log(Str);
  function DeleteTaskbyindex(index) {
    setTask(function (arr) {
      const tempArr = [...arr];
      tempArr.splice(index, 1);
      return tempArr;
    });
  }
  function Deleteall() {
    setTask([]);
  }
  return (
    <div
      style={{
        display: "flex",
        color: "red",
        backgroundColor: "violet",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "spaceAround",
        alignItems: "center",
      }}
    >
      {task.map(function (item, index) {
        return <First item={item} in={index} deleteTask={DeleteTaskbyindex} />;
      })}

      <input
        type="text"
        value={Str}
        onChange={function (e) {
          console.log(e.target.value);
          setStr(e.target.value);
        }}
      />
      <button onClick={Add}>+</button>
      <button onClick={Deleteall}>Deleteall</button>
      <button onClick={DeleteTaskbyindex}>-</button>
    </div>
  );
}

export default App;

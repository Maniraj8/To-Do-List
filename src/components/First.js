import React from "react";


function First(props) 
{
  // const {deleteTask}=props
  function Del()
  {
    props.deleteTask(props.in)
  }
  return (
    
    
      <div>
        <p>{`${props.in + 1}.${props.item}`}</p>
        <button onClick={Del}>-</button>
      </div>
    
  );
}

export default First;

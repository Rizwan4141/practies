import React, { useState } from 'react';

const Todo = () => {
    const [todo,setTodo]=useState("")
    const [data,setData]=useState([])
    const handleAdd=()=>{
        setData([...data,todo])
        setTodo("")
        console.log("===>",data)
    }
    return (
        <div>
            <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
            <button onClick={handleAdd} >Add</button>
            <ul>
                {data.map((item)=>(
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
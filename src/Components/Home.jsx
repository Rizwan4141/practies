import React from "react";

const Home = () => {
  const handle = () => {
    var result = document.getElementById("inp").value;
    document.getElementById("main").value=result 
    
  };

  return (
    <div>
      <input type="text" id="inp" />
      <button onClick={handle}>Click </button>
      <br />
      <input type="text" id="main" />
      
    </div>
  );
};

export default Home;

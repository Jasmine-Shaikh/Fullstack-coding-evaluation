import React, { useEffect, useState } from "react";
import axios from "axios";


const Home = () => {

  const [todo, setTodos] = useState([]);
  const Check = () => {
    const token = localStorage.getItem("token");
    
    axios.get(`/todo`, {
        headers: { Authorization: `${token}` },
      })
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    Check();
  }, [setTodos]);

  return (
    <div >
    {todo.map((e) => (
              <div >
                <h2 >{e.title}</h2>
              </div>
            ))}
    </div>
  );
};

export default Home;

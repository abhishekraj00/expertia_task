import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

function getUser() {
  let userdata = JSON.parse(localStorage.getItem("userInfo"));
  return userdata;
}

function Dashboard() {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [user, setUser] = useState(getUser());

  const date = new Date().getDate();
  const month = new Date().getMonth();
  const c_month = monthNames[month];
  const year = new Date().getFullYear();

  const curr_date = `${date}th ${c_month}, ${year}`;

  const [task, setTask] = useState([]);

  const [input, setInput] = useState();

  function handelAdd() {
    
    
    if(task.length >=5){
        alert(" “Daily limit exceeded”.")
        return;
    }

    
    if (input) {
      setTask([...task, input]);
      setInput("");
    } else {
      alert("Empty task can not be added");
    }
  }

  return (
    <div className="main">
      <div className="main_cntaint">
        <div>
          <h2 className="heading_text">Hello</h2>
          <h1 className="heading_name">{user.username}</h1>
          <p>Good to see you here!</p>
        </div>
        <div>
          <h2 className="task_heading">Tasks for {curr_date} :</h2>
          <div className="task_list">
            <ul>
              {task?.map((e, i) => {
                return <li key={i}>{e}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="task_input">
          <input
            className="input_box"
            placeholder="Eg. Need to finish my assignment . . ."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            style={{ fontSize: "20px" }}
            class="login_btn btn btn-dark"
            type="button"
            onClick={handelAdd}
          >
            Add New Task
          </button>
          <span style={{ alignSelf: "center", fontSize: "20px" }}>
            <Link className="text_btn_small" to="/">
              Logout
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="main">
      <div className="main_cntaint">
        <div>
          <h2 className="heading_text">Hello</h2>
          <h1 className="heading_name">Name</h1>
          <p>Good to see you here!</p>
        </div>
        <div>
          <h2 className="task_heading">Tasks for 24th Dec, 2022 :</h2>
          <div className="task_list">
          <li>sdajkdhakdhakj</li>
            
          </div>
        </div>
        <div className="task_input">
          <input
            className="input_box"
            placeholder="Eg. Need to finish my assignment . . ."
          />
          <button
            style={{ fontSize: "20px" }}
            class="login_btn btn btn-dark"
            type="button"
          >
            Add New Task
          </button>
          <span style={{ alignSelf: "center", fontSize: "20px" }} >
          
          <Link className="text_btn_small" to="/">Logout</Link></span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

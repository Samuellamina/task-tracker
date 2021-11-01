import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Docs appiontment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Shopping",
      day: "Feb 17th at 2:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Birthday Bash",
      day: "Aug 5th at 2:30pm",
      reminder: true,
    },
  ]);

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import axios from "axios";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/tasks")
      .then(res => setTasks(res.data));
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map(t => (
        <div key={t.id}>
          <h4>{t.title}</h4>
          <p>{t.priority}</p>
        </div>
      ))}
    </div>
  );
}
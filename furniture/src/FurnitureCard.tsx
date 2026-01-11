import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Number:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export function TodoList() {
  const tasks = ["Study React", "Project", "Next.js Study"];
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}
export default Counter;

import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {

  const total = 15;
  const completed = 5;
  const remaining = 10;

  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [completed, remaining],
        backgroundColor: ["#10b981", "#ef4444"],
      },
    ],
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <h3>Total: {total}</h3>
      <h3>Completed: {completed}</h3>
      <h3>Remaining: {remaining}</h3>

      <div style={{ width: "300px" }}>
        <Pie data={data} />
      </div>
    </div>
  );
}
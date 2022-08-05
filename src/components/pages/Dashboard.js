import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <Link to={"/logout"}>Logout</Link>
    </div>
  );
}

export default Dashboard;

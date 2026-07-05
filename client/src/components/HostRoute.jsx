import { Navigate } from "react-router-dom";

function HostRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    alert("Please login first.");
    return <Navigate to="/login" />;
  }

  if (user.role !== "host") {
    alert("Only hosts can access this page.");
    return <Navigate to="/" />;
  }

  return children;
}

export default HostRoute;
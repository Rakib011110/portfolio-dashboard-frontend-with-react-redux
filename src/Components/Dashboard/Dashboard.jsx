import React, { useContext } from "react";
import { Link } from "react-router"; // Corrected import for `react-router-dom`
import { AuthContext } from "../../Provider/AuthProvider";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout method from AuthContext
      console.log("Logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      {/* Top Navbar */}
      <header className="bg-gray-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold">RAKIBUL ISLAM</h1>
          <div>
            {user?.email ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm">Welcome, {user?.email}</span>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-primary btn-sm">Login</button>
              </Link>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Dashboard;

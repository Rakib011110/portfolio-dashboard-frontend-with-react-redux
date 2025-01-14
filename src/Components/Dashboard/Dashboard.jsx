import React from "react";
import { Link } from "react-router";

const Dashboard = () => {
  return (
    <div>
      {/* Top Navbar */}
      <header className="bg-gray-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold">RAKIBUL ISLAM</h1>
          <div>
            <Link to={"login"}>
              <button className="btn btn-primary btn-sm">Logout</button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Dashboard;

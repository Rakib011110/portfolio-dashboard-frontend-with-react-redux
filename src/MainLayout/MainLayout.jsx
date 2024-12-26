import React from "react";
import { Outlet, Link } from "react-router";
import Dashboard from "../Components/Dashboard/Dashboard";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Dashboard />

      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-700">Navigation</h2>
          </div>
          <nav className="space-y-2 p-4">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-600 hover:bg-gray-200 p-2 rounded-md">
              <span>🏠</span>
              <span>Home</span>
            </Link>
            <Link
              to="/projects"
              className="flex items-center space-x-2 text-gray-600 hover:bg-gray-200 p-2 rounded-md">
              <span>📁</span>
              <span>Projects</span>
            </Link>
            <Link
              to="/blogs"
              className="flex items-center space-x-2 text-gray-600 hover:bg-gray-200 p-2 rounded-md">
              <span>📝</span>
              <span>Blogs</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-2 text-gray-600 hover:bg-gray-200 p-2 rounded-md">
              <span>📖</span>
              <span>About Me</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center space-x-2 text-gray-600 hover:bg-gray-200 p-2 rounded-md">
              <span>📬</span>
              <span>Contact</span>
            </Link>
          </nav>
        </aside>

        {/* Main Outlet Content */}
        <main className="flex-grow p-6 bg-gray-100">
          <Outlet />
        </main>
      </div>
      <footer className="bg-gray-800 text-white text-center py-3">
        &copy; {new Date().getFullYear()} Portfolio Dashboard
      </footer>
    </div>
  );
};

export default MainLayout;

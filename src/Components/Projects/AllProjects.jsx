import React from "react";
import {
  useDeleteProjectMutation,
  useGetProjectQuery,
} from "../../redux/api/projectsApi/projectsApi";

const AllProjects = () => {
  const {
    data: projects,
    isLoading,
    isError,
  } = useGetProjectQuery({}, { pollingInterval: 1000 });
  const [deleteProject] = useDeleteProjectMutation();

  const handleDelete = async (projectId) => {
    try {
      await deleteProject(projectId).unwrap();
      alert("Project deleted successfully!");
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Failed to delete project.");
    }
  };

  if (isLoading) {
    return <p>Loading projects...</p>;
  }

  if (isError) {
    return <p>Failed to load projects. Please try again later.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Projects</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-500">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="border border-gray-500 px-4 py-2">#</th>
              <th className="border border-gray-500 px-4 py-2">Name</th>
              <th className="border border-gray-500 px-4 py-2">Description</th>
              <th className="border border-gray-500 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects?.map((project, index) => (
              <tr
                key={project.id}
                className="text-center bg-gray-100 hover:bg-gray-200">
                <td className="border border-gray-500 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {project.name}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  {project.description}
                </td>
                <td className="border border-gray-500 px-4 py-2">
                  <button
                    onClick={() => handleDelete(project._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProjects;

import React from "react";
import {
  useFetchBlogsQuery,
  useDeleteBlogMutation,
} from "../redux/api/blogApi/blogApi";

const Home = () => {
  const { data: blogs, isLoading, error } = useFetchBlogsQuery({});
  const [deleteBlog] = useDeleteBlogMutation();

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (confirmed) {
      try {
        await deleteBlog(id);
        alert("Blog deleted successfully!");
      } catch (err) {
        console.error("Error deleting blog:", err);
        alert("Failed to delete the blog.");
      }
    }
  };

  if (isLoading) return <p>Loading blogs...</p>;
  if (error) return <p className="text-red-500">Failed to load blogs......</p>;

  return (
    <div className="container mx-auto py-6 px-4">
      <h1 className="text-2xl font-bold mb-6">All Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs?.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border">
            {/* Blog Image */}
            {blog.photoUrl && (
              <img
                src={blog.photoUrl}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />
            )}

            {/* Blog Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 truncate">
                {blog.title}
              </h2>
              <p className="text-gray-600 mt-2 line-clamp-3">{blog.content}</p>
              <p className="text-sm text-gray-500 mt-3">
                Author: {blog.author}
              </p>

              {/* Tags */}
              {blog.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-500 text-xs px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Delete Button */}
            <div className="p-4 border-t flex justify-between items-center">
              <button
                onClick={() => handleDelete(blog.id)}
                className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

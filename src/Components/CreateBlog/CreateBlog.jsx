import React from "react";
import BlogForm from "./BlogForm/BlogForm";

const CreateBlog = () => {
  const handleFormSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div>
      <div>
        <BlogForm onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default CreateBlog;

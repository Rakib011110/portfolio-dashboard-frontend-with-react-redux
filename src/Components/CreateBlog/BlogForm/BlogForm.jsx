import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateBlogMutation } from "../../../redux/api/blogApi/blogApi";

const BlogForm = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [createBlog] = useCreateBlogMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "techubimage");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dkm4xad0x/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (response.ok) {
        return data.secure_url;
      } else {
        console.error("Image upload failed:", data.error?.message);
        return null;
      }
    } catch (error) {
      console.error("Cloudinary Upload Error:", error);
      return null;
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      const uploadedUrl = await uploadToCloudinary(file);
      setImage(uploadedUrl);
    }
  };

  const onSubmit = async (data) => {
    const blogData = {
      ...data,
      photoUrl: image,
    };
    console.log("Blog Data:", blogData);

    try {
      await createBlog(blogData).unwrap();
      console.log("Blog created successfully");
    } catch (error) {
      console.error("Create Blog Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Title */}
      <div>
        <label htmlFor="title" className="block font-medium text-gray-700">
          Title
        </label>
        <input
          id="title"
          type="text"
          {...register("title", { required: "Title is required" })}
          className="w-full p-2 border rounded mt-1 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      {/* Content */}
      <div>
        <label htmlFor="content" className="block font-medium text-gray-700">
          Content
        </label>
        <textarea
          id="content"
          {...register("content", { required: "Content is required" })}
          rows="5"
          className="w-full p-2 border rounded mt-1 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.content && (
          <p className="text-red-500 text-sm">{errors.content.message}</p>
        )}
      </div>

      {/* Author */}
      <div>
        <label htmlFor="author" className="block font-medium text-gray-700">
          Author
        </label>
        <input
          id="author"
          type="text"
          {...register("author", { required: "Author name is required" })}
          className="w-full p-2 border rounded mt-1 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.author && (
          <p className="text-red-500 text-sm">{errors.author.message}</p>
        )}
      </div>

      {/* Tags */}
      <div>
        <label htmlFor="tags" className="block font-medium text-gray-700">
          Tags (comma-separated)
        </label>
        <input
          id="tags"
          type="text"
          {...register("tags")}
          placeholder="e.g., Node.js, JavaScript"
          className="w-full p-2 border rounded mt-1 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Image Upload */}
      <div>
        <label className="block font-medium text-gray-700">Blog Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-2 block w-full text-sm text-gray-500"
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="mt-4 w-full h-32 object-cover rounded-lg"
          />
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Submit
        </button>
      </div>
    </form>
  );
};

export default BlogForm;

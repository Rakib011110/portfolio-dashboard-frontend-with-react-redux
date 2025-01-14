import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useCreateProjectMutation } from "../../redux/api/projectsApi/projectsApi";
import AllProjects from "./AllProjects";

const ProjectForm = () => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [createProject] = useCreateProjectMutation();
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
      setImagePreview(URL.createObjectURL(file)); // Show preview
      const uploadedUrl = await uploadToCloudinary(file);
      if (uploadedUrl) {
        setImage(uploadedUrl); // Set only if upload is successful
      } else {
        console.error("Failed to upload the image.");
        alert("Image upload failed. Please try again.");
        setImagePreview(null); // Reset preview on failure
      }
    }
  };

  const onSubmit = async (data) => {
    if (!image) {
      alert("Please upload an image before submitting.");
      return;
    }

    const projectData = {
      ...data,
      technologies: data.technologies.split(",").map((tech) => tech.trim()), // Split tags into an array
      photoUrl: image,
    };

    try {
      console.log("Submitting project data:", projectData); // Debug log
      await createProject(projectData).unwrap();
      console.log("Project created successfully");
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <div>
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

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
            rows="5"
            className="w-full p-2 border rounded mt-1 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Technologies */}
        <div>
          <label
            htmlFor="technologies"
            className="block font-medium text-gray-700">
            Technologies (comma-separated)
          </label>
          <input
            id="technologies"
            type="text"
            {...register("technologies", {
              required: "Technologies are required",
            })}
            placeholder="e.g., React, Node.js, MongoDB"
            className="w-full p-2 border rounded mt-1 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.technologies && (
            <p className="text-red-500 text-sm">
              {errors.technologies.message}
            </p>
          )}
        </div>

        {/* GitHub Link */}
        <div>
          <label
            htmlFor="githubLink"
            className="block font-medium text-gray-700">
            GitHub Link
          </label>
          <input
            id="githubLink"
            type="url"
            {...register("githubLink", { required: "GitHub link is required" })}
            className="w-full p-2 border rounded mt-1 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.githubLink && (
            <p className="text-red-500 text-sm">{errors.githubLink.message}</p>
          )}
        </div>

        {/* Live Demo Link */}
        <div>
          <label
            htmlFor="liveDemoLink"
            className="block font-medium text-gray-700">
            Live Demo Link (optional)
          </label>
          <input
            id="liveDemoLink"
            type="url"
            {...register("liveDemoLink")}
            className="w-full p-2 border rounded mt-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-medium text-gray-700">
            Project Image
          </label>
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

      <div className="mt-10">
        <AllProjects />
      </div>
    </div>
  );
};

export default ProjectForm;

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

const About = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      skills: {
        frontend: [],
        backend: [],
        tools: [],
      },
      education: [{ institution: "", degree: "", year: "" }],
    },
  });

  const {
    fields: educationFields,
    append: addEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "education",
  });

  const onSubmit = async (data) => {
    console.log("Submitting About Me data:", data);
    // Make API call here (similar to createProject)
    try {
      // Example API call:
      // await createAboutMe(data).unwrap();
      alert("About Me submitted successfully!");
    } catch (error) {
      console.error("Error submitting About Me:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block font-medium text-gray-700">
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Name is required" })}
          className="w-full p-2 border rounded mt-1 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Bio */}
      <div>
        <label htmlFor="bio" className="block font-medium text-gray-700">
          Bio
        </label>
        <textarea
          id="bio"
          {...register("bio", { required: "Bio is required" })}
          rows="4"
          className="w-full p-2 border rounded mt-1 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.bio && (
          <p className="text-red-500 text-sm">{errors.bio.message}</p>
        )}
      </div>

      {/* Skills */}
      <div>
        <label htmlFor="skills" className="block font-medium text-gray-700">
          Skills
        </label>
        <div className="space-y-2">
          <div>
            <label className="block text-gray-600">Frontend</label>
            <input
              type="text"
              {...register("skills.frontend")}
              placeholder="e.g., React, Vue"
              className="w-full p-2 border rounded mt-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-600">Backend</label>
            <input
              type="text"
              {...register("skills.backend")}
              placeholder="e.g., Node.js, Django"
              className="w-full p-2 border rounded mt-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-600">Tools</label>
            <input
              type="text"
              {...register("skills.tools")}
              placeholder="e.g., Git, Docker"
              className="w-full p-2 border rounded mt-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Education */}
      <div>
        <label htmlFor="education" className="block font-medium text-gray-700">
          Education
        </label>
        {educationFields.map((field, index) => (
          <div key={field.id} className="space-y-2 border-b pb-4 mb-4">
            <div>
              <label className="block text-gray-600">Institution</label>
              <input
                {...register(`education.${index}.institution`)}
                className="w-full p-2 border rounded mt-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Institution name"
              />
            </div>
            <div>
              <label className="block text-gray-600">Degree</label>
              <input
                {...register(`education.${index}.degree`)}
                className="w-full p-2 border rounded mt-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Degree"
              />
            </div>
            <div>
              <label className="block text-gray-600">Year</label>
              <input
                type="number"
                {...register(`education.${index}.year`)}
                className="w-full p-2 border rounded mt-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Year"
              />
            </div>
            <button
              type="button"
              onClick={() => removeEducation(index)}
              className="text-red-500 text-sm underline">
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            addEducation({ institution: "", degree: "", year: "" })
          }
          className="bg-gray-200 text-sm text-blue-500 py-1 px-3 rounded hover:bg-gray-300">
          Add Education
        </button>
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

export default About;

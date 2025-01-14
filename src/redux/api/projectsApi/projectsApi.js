import baseApi from "../baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all projects
    getProject: builder.query({
      query: () => "/project",
      providesTags: ["Projects"],
    }),
    createProject: builder.mutation({
      query: (projectData) => ({
        url: "project",
        method: "POST",
        body: projectData,
      }),
      invalidatesTags: ["Projects"],
    }),
    updateProject: builder.mutation({
      query: ({ id, projectData }) => ({
        url: `project/${id}`,
        method: "PUT",
        body: projectData,
      }),
      invalidatesTags: ["Projects"],
    }),
    deleteProject: builder.mutation({
      query: (id) => ({
        url: `project/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Projects"],
    }),
  }),
});

export const {
  useGetProjectQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectApi;

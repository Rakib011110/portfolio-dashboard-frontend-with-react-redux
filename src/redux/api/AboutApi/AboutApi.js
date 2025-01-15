import baseApi from "../baseApi";

const AboutApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAbout: builder.mutation({
      query: (newAbout) => ({
        url: "/about",
        method: "POST",
        body: newAbout,
      }),
    }),
    getAbout: builder.query({
      query: () => ({
        url: "/about",
        method: "GET",
      }),
    }),
    updateAbout: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/about/${id}`,
        method: "PUT",
        body: updatedData,
      }),
    }),
    deleteAbout: builder.mutation({
      query: (id) => ({
        url: `/about/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateAboutMutation,
  useGetAboutQuery,
  useUpdateAboutMutation,
  useDeleteAboutMutation,
} = AboutApi;

export default AboutApi;

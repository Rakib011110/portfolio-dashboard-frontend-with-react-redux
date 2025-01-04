import baseApi from "../baseApi";

export const blogsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchBlogs: builder.query({
      query: () => "/blogs",
      providesTags: ["Blog"],
    }),
    fetchBlogById: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: (result, error, id) => [{ type: "Blog", id }],
    }),
    createBlog: builder.mutation({
      query: (blogData) => ({
        url: "/blogs",
        method: "POST",
        body: blogData,
      }),
      invalidatesTags: ["Blog"],
    }),

    updateBlog: builder.mutation({
      query: ({ id, blogData }) => ({
        url: `/blogs/${id}`,
        method: "PUT",
        body: blogData,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Blog", id }],
    }),

    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Blog" }],
    }),
  }),
});

export const {
  useFetchBlogsQuery,
  useFetchBlogByIdQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogsApi;

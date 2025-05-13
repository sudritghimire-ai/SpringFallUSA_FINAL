import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    // GET blogs
    fetchBlogs: builder.query({
      query: ({ search = '', category = '', location = '' }) =>
        `/blogs?search=${search}&category=${category}&location=${location}`,
    }),

    // GET blog by id
    fetchBlogById: builder.query({
      query: (id) => `/blogs/${id}`,
    }),

    // GET related blogs
    fetchRelatedBlogs: builder.query({
      query: (id) => `/blogs/related/${id}`,
    }),

    // POST a new blog
    postBlog: builder.mutation({
      query: (newPost) => ({
        url: '/blogs/create-post',
        method: 'POST',
        body: newPost,
      }),
    }),

    updateBlog: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/blogs/update-post/${id}`,
        method: 'PATCH', // Using PATCH here
        body: updatedData,
      }),
    }),
    

    // DELETE a blog
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// Export the auto-generated hooks
export const { 
  useFetchBlogsQuery, 
  useFetchBlogByIdQuery, 
  useFetchRelatedBlogsQuery,
  usePostBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation
} = blogApi;

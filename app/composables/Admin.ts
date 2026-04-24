import type { DTO_PostCreate, Post } from "~/types/Post";

export const Admin = () => {
    const config = useRuntimeConfig();

    const api = $fetch.create({
    baseURL: config.public.apiBaseUrl
  })

  return {
    createPost: (post: DTO_PostCreate) => api<Post>("/api/Admin/blog", {method: 'POST', body: post}),
    getPost: (id: number) => api<Post>("/api/Admin/blog/" + id, {method: 'GET'}),
    getPosts: () => api<Array<Post>>("/api/Admin/blog", {method: 'GET' }),
    publishPosts: (id: number) => api<Array<Post>>("/api/Admin/blog/" + id + "/publish", {method: 'POST' }),
    unpublishPosts: (id: number) => api<Array<Post>>("/api/Admin/blog/" + id + "/unpublish", {method: 'POST' }),
    moveToBin: (id: number) => api<Array<Post>>("/api/Admin/blog/" + id, {method: 'DELETE' })
  }
};
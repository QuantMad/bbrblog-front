import type { Post } from "~/types/Post";

export const Blog = () => {
    const config = useRuntimeConfig();

    const api = $fetch.create({
    baseURL: config.public.apiBaseUrl
  })

  return {
    getPosts: () => api<Array<Post>>("/api/Blog", {method: 'GET' }),
    getPost: (id: number) => api<Post>("/api/Blog/" + id, {method: 'GET'}),
    getPostsByTag: (tag: string) => api<Array<Post>>("/api/Blog/tags/" + tag, {method: 'GET' })
  }
};
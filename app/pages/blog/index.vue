<script setup lang="ts">
import type { Post } from '~/types/Post';

const posts = ref<Array<Post>>();

onMounted(async () => {
    posts.value = await Blog().getPosts();
})

</script>
<template>
    <h2>Все посты</h2>
    <div v-if="posts">
    <article v-for="post in posts">
        <NuxtLink :to="`/blog/posts/${post.id}`">
            <h3>{{ post.title }}</h3>
        </NuxtLink>
        <p>{{ post.content }}...</p>
    </article>
    </div>
    <div v-else>
        No posts to show
    </div>
</template>
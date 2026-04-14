<script setup lang="ts">
import type { Post } from '~/types/Post';

const route = useRoute();
const id = Number(route.params.id);

const post = ref<Post>();

onMounted(async () => {
  post.value = await Blog().getPost(id);
})
</script>

<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <h5>{{ post.created }}</h5>
    <div>{{ post.content }}</div>
  </div>
  <div v-else>
    Failed to load post
  </div>
    <NuxtLink to="/blog"><-- Go back...</NuxtLink>
</template>
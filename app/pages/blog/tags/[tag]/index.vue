<script setup lang="ts">
import type { Post } from '~/types/Post';

const route = useRoute();
const posts = ref<Array<Post>>();
const tag = String(route.params.tag);

onMounted(async () => {
  posts.value = await Blog().getPostsByTag(tag);
})

</script>

<template>
  <h2>{{ "Посты по тегу: " + tag }}</h2>
  <PostList :posts="posts"></PostList>
</template>
<script setup lang="ts">
import type { Post } from '~/types/Post';

const route = useRoute();
const posts = ref<Array<Post>>();
const tag = String(route.params.name);

onMounted(async () => {
  posts.value = await Blog().getPostsByTag(tag);
})

</script>

<template>
  <div v-if="posts">
    <article v-for="post in posts">
        <NuxtLink :to="`/blog/tags/${tag}/posts/${post.id}`">
            <h3>{{ post.title }}</h3>
        </NuxtLink>
        <div v-if="post.tags.length != 0" class="tag_list">
            <div v-for="tag in post.tags">
                <NuxtLink :to="`/blog/tags/${tag}`">{{ tag }}</NuxtLink>
            </div>
        </div>
        <p>{{ post.content }}...</p>
    </article>
    </div>
    <div v-else>
        No posts to show
    </div>
</template>
<script setup lang="ts">
import type { Post } from '~/types/Post';

const route = useRoute();
const posts = ref<Array<Post>>();

const props = defineProps<{
  getPosts: () => Promise<Array<Post>>
}>()

onMounted(async () => {
  posts.value = await props.getPosts();
})

</script>
<template>
    <div v-if="posts">
        <article v-for="post in posts">
            <NuxtLink :to="`${route.path}/posts/${post.id}`">
                <h3>{{ post.title }}</h3>
            </NuxtLink>
            <TagList :tags="post.tags"></TagList>
            <p>{{ post.content }}...</p>
        </article>
    </div>
    <div v-else>
        No posts to show
    </div>
</template>

<style scoped>
.tag_list {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.tag_list div {
    padding: 0px 2px 0px 2px;
}
</style>
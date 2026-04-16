<script setup lang="ts">
import type { Post } from '~/types/Post';

const route = useRoute();

const props = defineProps({
    posts: Array<Post>
});

</script>
<template>
    <h1>{{ route.path }}</h1>
    <div v-if="posts">
        <article v-for="post in posts">
            <NuxtLink :to="`${route.path}/posts/${post.id}`">
                <h3>{{ post.title }}</h3>
            </NuxtLink>

            <div v-if="post.tags.length != 0" class="tag_list">
                <div v-for="t in post.tags">
                    <NuxtLink :to="`/blog/tags/${t}`">{{ t }}</NuxtLink>
                </div>
            </div>
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
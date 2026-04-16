<script setup lang="ts">
import type { Post } from '~/types/Post';

const posts = ref<Array<Post>>();

onMounted(async () => {
    posts.value = await Blog().getPosts();
})

</script>
<template>
    <h2>Все посты</h2>
    <PostList :posts="posts"></PostList>
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
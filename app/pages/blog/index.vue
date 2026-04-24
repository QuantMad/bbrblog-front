<template>
    <h2>Все посты</h2>
    <PostList :get-posts="Blog().getPosts"></PostList>
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
<script setup lang="ts">
const props = defineProps({
    tags: Array<String>
});
</script>
<template>
    <p v-if="tags">
    <div v-if="tags.length != 0" class="tag_list">
        <div v-for="tag in tags">
            <NuxtLink :to="`/blog/tags/${tag}`">{{ tag }}</NuxtLink>
        </div>
    </div>
    </p>
    <div v-else>
        How is this even possible...
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
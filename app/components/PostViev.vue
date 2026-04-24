<script setup lang="ts">
import type { Post } from '~/types/Post';

const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);

const post = ref<Post>();

const props = defineProps<{
  getPost: (id: number) => Promise<Post>
}>()

onMounted(async () => {
  post.value = await props.getPost(id);
})

</script>

<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <h5>{{ post.created }}</h5>
    <TagList :tags="post.tags"></TagList>
    <MDC :value="post.content" />
  </div>

  <div v-else>
    Failed to load post
  </div>
  <button @click="router.back()">
    ← Go back
  </button>
</template>

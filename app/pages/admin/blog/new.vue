<template>
  <div>
    <h1>Create new post:</h1>
    <MarkdownEditor />
  </div>
</template>

<script lang="ts" setup>
import MarkdownEditor from '~/components/editor/MarkdownEditor.vue';

const value = ref<string>();
</script>

<style>

</style>
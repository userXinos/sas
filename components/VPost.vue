<script setup lang="ts">
import VPostFooter from '~/components/VPostFooter.vue';
import type { Post } from '~/types/Public';

defineProps<{
  post: Post;
}>();
</script>

<template>
  <div class="post">
    <div class="content">
      <h2 class="title">
        {{ post.title }}
      </h2>
      <p class="body">
        {{ post.body }}
      </p>
    </div>

    <VPostFooter :post="post" />
  </div>
</template>

<style scoped>
.post {
  width: 676px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 24px;

  .content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;

    .title {
      font-weight: bold;
    }
  }
}
</style>

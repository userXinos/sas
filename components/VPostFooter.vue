<script setup lang="ts">
import VPostFooterActions from '~/components/VPostFooterActions.vue';
import VPostFooterTags from '~/components/VPostFooterTags.vue';
import type { Post } from '~/types/Public';

defineProps<{
  post: Post;
}>();
</script>

<template>
  <div class="post-footer">
    <VPostFooterActions :post="post" />
    <RouterLink class="comments-link" :to="{ name: 'posts-id', params: { id: post.id } }">
      <span>Open comments</span>
    </RouterLink>
    <span class="date">Today</span>
    <VPostFooterTags :post="post" />
  </div>
</template>

<style scoped>
.post-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px
}

.comments-link {
  color: var(--primary);
  border-bottom: 1px solid var(--primary-border);

  &:hover {
    opacity: 0.8;
  }
}

.date {
  color: rgba(4, 4, 5, 0.22)
}
</style>

<script setup lang="ts">
import type { Post } from '~/types/Public';

defineProps<{
  post: Post;
}>();
</script>

<template>
  <div class="tags">
    <div
      v-for="tag in post.tags"
      :key="tag"
      class="tag"
    >
      <span>{{ tag }}</span>
    </div>
  </div>
</template>

<style scoped>
.tags {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.tag {
  height: 18px;
  padding: 4px;
  border-radius: 4px;
  display: inline-flex;
  background: rgba(120, 120, 128, 0.08);
  box-sizing: border-box;
  font-size: 10px;

  &:first-child {
    position: relative;
    margin-left: 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  &:first-child:before {
    content: '';
    width: 10px;
    height: 17px;
    background: url("~/accets/Tail.svg");
    position: absolute;
    left: -10px;
    top: 0
  }
}
</style>

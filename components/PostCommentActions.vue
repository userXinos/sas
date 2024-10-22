<script setup lang="ts">
import type { Comment, Post } from '~/types/Public';

defineProps<{
  comment: Comment;
  postId: Post['id'];
}>();
const store = useCommentsStore();
</script>

<template>
  <div>
    <button class="btn remove" @click="store.deleteComment(postId, comment.id)">
      Удалить
    </button>
  </div>
</template>

<style scoped>
.btn {
  outline: none;
   border: none;
   background: none;
   cursor: pointer;
   padding: 0;

   &.remove {
     color: rgba(255, 59, 48, 1);
     border-bottom: 1px solid rgba(255, 59, 48, 1);

     &:hover {
       opacity: 0.8;
     }
   }
}
</style>

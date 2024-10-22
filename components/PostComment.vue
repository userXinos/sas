<script setup lang="ts">
import PostCommentActions from '~/components/PostCommentActions.vue';
import type { Comment, Post } from '~/types/Public';

defineProps<{
  comment: Comment;
  postId: Post['id'];
}>();
</script>

<template>
  <div class="comment">
    <div class="avatar" />
    <div class="body">
      <div class="body_content">
        <h2 class="username">
          {{ comment.user.username }}
        </h2>
        <p>{{ comment.body }}</p>
      </div>
      <div class="comment-footer">
        <span class="date">Today</span>
        <PostCommentActions :comment="comment" :post-id="postId" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.comment {
  width: 676px;
  display: flex;
  align-items: flex-start;
  gap: 8px;

  .body {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .body_content {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }

  .avatar {
    border-radius: 50%;
    width: 46px;
    height: 46px;
    border: 3px solid;
  }

  .username {
    font-weight: bold;
  }

  .date {
    color: rgba(4, 4, 5, 0.22)
  }

  .comment-footer {
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }
}
</style>

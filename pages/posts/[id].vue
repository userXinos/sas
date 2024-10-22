<script setup lang="ts">
import { useRoute } from '#app';
import { computed, onMounted } from 'vue';
import PostComment from '~/components/PostComment.vue';
import VPost from '~/components/VPost.vue';
import { useCommentsStore } from '~/stores/comments';
import { usePostsStore } from '~/stores/posts';
import type { FullPost } from '~/types/Public';

const route = useRoute();
const store = usePostsStore();
const storeComments = useCommentsStore();
const post = ref<FullPost>();
const comments = computed(() => post.value ? post.value.comments.filter(e => !storeComments.isDeleted(post.value.id, e.id)) : []);

onMounted(async () => {
  post.value = await store.getFullPost(Number.parseInt(route.params.id));
});
</script>

<template>
  <div class="post-page">
    <div v-if="!post">
      Крутая анимация загрузки...
    </div>

    <template v-else>
      <VPost :post="post" />
      <div class="comments">
        <h2> {{ comments.length }} Комментариев</h2>

        <PostComment
          v-for="comment in comments"
          :key="comment.id"
          :comment="comment"
          :post-id="post.id"
        />
      </div>
    </template>
  </div>
</template>

<style scoped>
.post-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
}

.comments {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  > h2 {
    font-weight: bold;
  }
}
</style>

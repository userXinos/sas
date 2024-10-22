<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import VPost from '~/components/VPost.vue';
import { usePostsStore } from '~/stores/posts';

const store = usePostsStore();
const { posts } = storeToRefs(store);

onMounted(() => {
  store.fetchPosts();
});
</script>

<template>
  <div class="posts">
    <div v-if="posts.length === 0">
      Крутая анимация загрузки...
    </div>

    <VPost
      v-for="post in posts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<style scoped>
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
}
</style>

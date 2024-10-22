<script setup lang="ts">
import { computed } from 'vue';
import FingerDownIcon from '~/accets/finger-down.svg';
import HeartIcon from '~/accets/heart.svg';
import { usePostsStore } from '~/stores/posts';
import type { Post } from '~/types/Public';

const props = defineProps<{
  post: Post;
}>();

const store = usePostsStore();

const isLiked = computed(() => store.checkReaction(props.post, 'likes'));
const isDisliked = computed(() => store.checkReaction(props.post, 'dislikes'));
</script>

<template>
  <div class="buttons">
    <button
      class="btn like"
      :class="{ __active: isLiked }"
      @click="store.reactPost(post, 'likes')"
    >
      <span class="icon-simple" :style="{ '--svg': `url(${HeartIcon})` }" />
      <span>Like</span>

      <span class="count">{{ post.reactions.likes }}</span>
    </button>
    <button
      class="btn dislike"
      :class="{ __active: isDisliked }"
      @click="store.reactPost(post, 'dislikes')"
    >
      <span class="icon-simple" :style="{ '--svg': `url(${FingerDownIcon})` }" />
      <span>Trash</span>

      <span class="count">{{ post.reactions.dislikes }}</span>
    </button>
  </div>
</template>

<style scoped>
.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
}
.btn {
  padding: 8px 8px 8px 12px;
  background: rgba(4, 4, 5, 0.04);
  height: 27px;
  outline: none;
  border: none;
  font-size: 11px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all .3s ease-in;

  &:hover {
    background: rgba(4, 4, 5, 0.1);
  }

  .count {
    margin-left: 2px;
    opacity: 30%;
  }

  &.like {
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;

    &.__active {
      background: rgba(255, 59, 48, 1);
      color: white;

      .count {
        opacity: 100%;
      }
    }
  }

  &.dislike {
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;

    &.__active {
      background: rgba(4, 4, 5, 1);
      color: white;

      .count {
        color: rgba(255, 255, 255, 0.95);
      }
    }
  }
}
</style>

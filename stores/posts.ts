import { defineStore } from 'pinia';
import type { FullPost, Post } from '~/types/Public';

const ENDPOINT = 'https://dummyjson.com';

type Reactions = Record<Post['id'], keyof Post['reactions']>;

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<Post[]>([]);
  const reactions = ref<Reactions>({});

  return {
    posts,
    reactions,
    fetchPosts,
    getFullPost,
    reactPost,
    checkReaction,
  };

  async function fetchPosts(limit = 5) {
    const url = new URL(`/posts`, ENDPOINT);
    url.searchParams.set('limit', limit.toString());

    const { posts: pss } = await fetch(url).then(r => r.json());

    posts.value = pss;
  }

  async function getFullPost(id: Post['id']): Promise<FullPost> {
    const urlPost = new URL(`/posts/${id}`, ENDPOINT);
    const urlComments = new URL(`/posts/${id}/comments`, ENDPOINT);

    const post = await fetch(urlPost).then(r => r.json());
    const { comments } = await fetch(urlComments).then(r => r.json());

    return {
      ...post,
      comments,
    };
  }

  function reactPost<T extends Post>(post: T, key: keyof Post['reactions']) {
    if (reactions.value[post.id] === key) {
      delete reactions.value[post.id];
      post.reactions[key]--;
    }
    else {
      if (reactions.value[post.id]) {
        post.reactions[reactions.value[post.id]]--;
      }
      reactions.value[post.id] = key;
      post.reactions[key]++;
    }
  }

  function checkReaction<T extends Post>(post: T, key: keyof Post['reactions']) {
    return reactions.value[post.id] === key;
  }
});

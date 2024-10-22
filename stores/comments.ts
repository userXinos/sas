import type { Comment, Post } from '~/types/Public';

type Deleted = Record<Post['id'], Comment['id'][]>;

export const useCommentsStore = defineStore('comments', () => {
  const deleted = reactive<Deleted>({});

  return {
    deleted,
    deleteComment,
    isDeleted,
  };

  function deleteComment(postId: Post['id'], id: Comment['id']) {
    if (!(postId in deleted)) {
      deleted[postId] = [];
    }

    deleted[postId].push(id);
  }

  function isDeleted(postId: Post['id'], id: Comment['id']) {
    return deleted[postId]?.includes(id) ?? false;
  }
});

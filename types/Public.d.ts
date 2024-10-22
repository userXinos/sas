export interface Post {
  title: string;
  id: number;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

export interface FullPost extends Post {
  comments: Comment[];
}

export interface Comment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: {
    id: number;
    name: string;
    fullName: string;
  };
}

export interface PostReactions {
  [k: keyof Post['reactions']]: boolean;
}

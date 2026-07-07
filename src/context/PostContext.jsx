import React, { createContext, useState, useContext } from 'react';
import { feedPosts as initialPosts } from '../data/mockData';
import { currentUser } from '../data/mockData';

const PostContext = createContext();

export const usePosts = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(initialPosts);

  const toggleLike = (postId) => {
    setPosts(prevPosts => 
      prevPosts.map(post => {
        if (post.id === postId) {
          const isLiked = !post.isLikedByCurrentUser;
          return {
            ...post,
            isLikedByCurrentUser: isLiked,
            likes: isLiked ? post.likes + 1 : post.likes - 1
          };
        }
        return post;
      })
    );
  };

  const addComment = (postId, text) => {
    setPosts(prevPosts => 
      prevPosts.map(post => {
        if (post.id === postId) {
          const newComment = {
            id: Date.now(),
            author: currentUser.name,
            avatar: currentUser.avatar,
            text: text,
            headline: currentUser.headline,
            time: 'Just now'
          };
          return {
            ...post,
            comments: [...post.comments, newComment]
          };
        }
        return post;
      })
    );
  };

  return (
    <PostContext.Provider value={{ posts, toggleLike, addComment }}>
      {children}
    </PostContext.Provider>
  );
};

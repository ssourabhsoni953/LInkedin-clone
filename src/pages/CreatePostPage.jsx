import React from 'react';
import CreatePost from '../components/feed/CreatePost';

const CreatePostPage = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-xl font-bold text-white mb-4 px-2">Create a Post</h1>
      <CreatePost />
    </div>
  );
};

export default CreatePostPage;

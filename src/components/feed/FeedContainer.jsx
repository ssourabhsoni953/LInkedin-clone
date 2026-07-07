import React, { useState, useEffect, useRef } from 'react';
import CreatePost from './CreatePost';
import PostCard from './PostCard';
import { ChevronDown } from 'lucide-react';
import { usePosts } from '../../context/PostContext';

const FeedContainer = () => {
  const { posts } = usePosts();
  const [visibleCount, setVisibleCount] = useState(5);
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Load more posts with a slight delay for realistic feel, or instant
        setVisibleCount((prev) => Math.min(prev + 5, posts.length));
      }
    }, { threshold: 0.1 });

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [posts.length]);

  return (
    <div className="flex flex-col">
      <CreatePost />
      
      <div className="flex items-center gap-2 mb-2 px-1">
        <div className="flex-1 h-[1px] bg-linkedin-border"></div>
        <div className="text-xs text-linkedin-text-secondary font-medium flex items-center gap-1 cursor-pointer">
          Sort by: <span className="font-semibold text-white flex items-center">Top <ChevronDown size={14} className="ml-1" /></span>
        </div>
      </div>
      
      <div className="flex flex-col">
        {posts.slice(0, visibleCount).map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      
      {visibleCount < posts.length && (
        <div ref={loadMoreRef} className="py-8 flex justify-center items-center">
          <div className="w-6 h-6 border-2 border-linkedin-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default FeedContainer;

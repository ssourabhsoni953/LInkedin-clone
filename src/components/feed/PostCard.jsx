import React, { useState } from 'react';
import { MoreHorizontal, X, Plus, Globe, ThumbsUp, MessageCircle, Repeat2, Send, Check, Sparkles } from 'lucide-react';
import { usePosts } from '../../context/PostContext';
import { dummyUsers } from '../../data/mockData';

const PostCard = ({ post }) => {
  const { toggleLike, addComment } = usePosts();
  const [showComments, setShowComments] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [showSendModal, setShowSendModal] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [summary, setSummary] = useState('');

  const handleLike = () => {
    toggleLike(post.id);
  };

  const handleShare = () => {
    const dummyUrl = `https://linkedin-clone.app/post/${post.id}`;
    navigator.clipboard.writeText(dummyUrl).then(() => {
      setToastMessage('Link copied to clipboard!');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  };

  const handleSend = (user) => {
    setShowSendModal(false);
    setToastMessage(`Post sent to ${user.name}`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const submitComment = (e) => {
    e.preventDefault();
    if (commentInput.trim()) {
      addComment(post.id, commentInput);
      setCommentInput('');
    }
  };

  const handleSummarize = () => {
    setIsSummarizing(true);
    // Simulate AI API call
    setTimeout(() => {
      const words = post.content.split(' ');
      const shortened = words.slice(0, Math.min(15, words.length)).join(' ') + '...';
      setSummary(shortened);
      setIsSummarizing(false);
    }, 1500);
  };

  return (
    <div className="bg-linkedin-card rounded-lg border border-linkedin-border mb-2 overflow-hidden flex flex-col relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold z-50 flex items-center gap-2 shadow-lg animate-fade-in">
          <Check size={16} /> {toastMessage}
        </div>
      )}

      {/* Send Modal */}
      {showSendModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-linkedin-card w-full max-w-sm rounded-xl border border-linkedin-border p-4 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white font-semibold text-lg">Send to</h3>
              <X size={20} className="text-linkedin-text-secondary cursor-pointer hover:text-white" onClick={() => setShowSendModal(false)} />
            </div>
            <div className="flex flex-col gap-2 max-h-64 overflow-y-auto pr-2">
              {dummyUsers.map(user => (
                <div key={user.id} onClick={() => handleSend(user)} className="flex items-center gap-3 p-2 hover:bg-[#2b3036] rounded-lg cursor-pointer transition-colors">
                  <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                  <span className="text-white font-medium text-sm">{user.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {post.isSuggested && (
        <div className="px-4 py-2 flex justify-between items-center border-b border-linkedin-border">
          <span className="text-xs text-linkedin-text-secondary font-medium">Suggested</span>
          <div className="flex items-center gap-2 text-linkedin-text-secondary">
            <MoreHorizontal size={20} className="cursor-pointer hover:text-white transition-colors" />
            <X size={20} className="cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>
      )}

      <div className="px-4 pt-3 flex gap-2">
        <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full object-cover shrink-0 cursor-pointer" />
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-start">
            <div className="flex flex-col cursor-pointer">
              <h3 className="text-sm font-semibold text-white hover:text-linkedin-primary hover:underline transition-colors flex items-center gap-1">
                {post.author.name} <span className="bg-[#c8b154] text-black text-[8px] font-bold px-1 rounded-[2px] leading-tight">in</span> <span className="text-linkedin-text-secondary font-normal text-xs">• {post.author.connectionDegree}</span>
              </h3>
              <p className="text-xs text-linkedin-text-secondary line-clamp-1">{post.author.headline}</p>
              <p className="text-xs text-linkedin-text-secondary flex items-center gap-1">
                {post.time} • <Globe size={12} />
              </p>
            </div>
            <button className="flex items-center gap-1 text-linkedin-primary font-semibold text-sm hover:bg-[#1a365d] px-2 py-1 rounded transition-colors">
              <Plus size={16} /> Follow
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 pt-2 pb-3">
        {!summary && post.content.length > 50 && (
          <div className="flex justify-end mb-2">
             <button 
              onClick={handleSummarize}
              disabled={isSummarizing}
              className="flex items-center gap-1 text-[11px] font-medium text-[#c8b154] bg-[#c8b154]/10 hover:bg-[#c8b154]/20 px-2 py-1 rounded transition-colors disabled:opacity-50"
            >
              <Sparkles size={12} />
              {isSummarizing ? 'Summarizing...' : 'AI Summarize'}
            </button>
          </div>
        )}
        
        {summary ? (
          <div className="bg-[#c8b154]/10 border border-[#c8b154]/20 p-3 rounded-lg mb-2">
            <p className="text-sm text-[#c8b154] font-medium mb-1 flex items-center gap-2">
              <Sparkles size={14} />
              AI Summary
            </p>
            <p className="text-sm text-white italic">"{summary}"</p>
            <button 
              onClick={() => setSummary('')}
              className="text-[11px] text-linkedin-text-secondary hover:text-white underline mt-2 transition-colors"
            >
              Show original post
            </button>
          </div>
        ) : (
          <p className="text-sm text-white whitespace-pre-wrap">{post.content}</p>
        )}
      </div>

      {post.image && (
        <div className="w-full bg-black">
          <img src={post.image} alt="Post content" className="w-full object-contain max-h-[500px]" />
        </div>
      )}

      <div className="px-4 pt-2">
        <div className="flex justify-between items-center text-xs text-linkedin-text-secondary pb-2 border-b border-linkedin-border">
           <div className="flex items-center gap-1">
             <div className="bg-blue-600 rounded-full p-0.5"><ThumbsUp size={10} className="text-white" /></div>
             <span>{post.likes}</span>
           </div>
           <div className="flex gap-2">
             <span>{post.comments?.length || 0} comments</span>
             <span>• {post.shares} shares</span>
           </div>
        </div>
      </div>

      <div className="px-4 py-1">
        <div className="flex items-center justify-between">
          <button 
            onClick={handleLike}
            className={`flex items-center gap-2 py-3 px-3 rounded-md transition-colors flex-1 justify-center ${post.isLikedByCurrentUser ? 'text-linkedin-primary hover:bg-[#1a365d]' : 'text-linkedin-text-secondary hover:bg-[#2b3036] hover:text-[#e9eaec]'}`}
          >
            <ThumbsUp size={20} className={post.isLikedByCurrentUser ? 'fill-linkedin-primary' : 'scale-x-[-1]'} />
            <span className="text-sm font-semibold hidden sm:inline">Like</span>
          </button>
          <button 
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-2 text-linkedin-text-secondary hover:bg-[#2b3036] hover:text-[#e9eaec] py-3 px-3 rounded-md transition-colors flex-1 justify-center"
          >
            <MessageCircle size={20} />
            <span className="text-sm font-semibold hidden sm:inline">Comment</span>
          </button>
          <button 
            onClick={handleShare}
            className="flex items-center gap-2 text-linkedin-text-secondary hover:bg-[#2b3036] hover:text-[#e9eaec] py-3 px-3 rounded-md transition-colors flex-1 justify-center"
          >
            <Repeat2 size={20} />
            <span className="text-sm font-semibold hidden sm:inline">Share</span>
          </button>
          <button 
            onClick={() => setShowSendModal(true)}
            className="flex items-center gap-2 text-linkedin-text-secondary hover:bg-[#2b3036] hover:text-[#e9eaec] py-3 px-3 rounded-md transition-colors flex-1 justify-center"
          >
            <Send size={20} />
            <span className="text-sm font-semibold hidden sm:inline">Send</span>
          </button>
        </div>
      </div>

      {showComments && (
        <div className="px-4 pb-4 animate-fade-in">
          <form onSubmit={submitComment} className="flex gap-3 mt-2 mb-4">
            <img src="https://i.pravatar.cc/150?img=11" alt="Me" className="w-10 h-10 rounded-full" />
            <div className="flex-1 relative">
              <input 
                type="text" 
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
                placeholder="Add a comment..." 
                className="w-full bg-[#38434f] text-white text-sm rounded-full py-2.5 px-4 outline-none border border-transparent focus:border-white transition-colors"
              />
              {commentInput.trim() && (
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-linkedin-primary font-semibold text-sm">
                  Post
                </button>
              )}
            </div>
          </form>

          <div className="flex flex-col gap-3 mt-4">
            {post.comments?.map(comment => (
              <div key={comment.id} className="flex gap-2">
                <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full cursor-pointer" />
                <div className="flex flex-col">
                  <div className="bg-[#38434f] rounded-lg px-3 py-2">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-white hover:underline cursor-pointer">{comment.author}</h4>
                        <p className="text-[11px] text-linkedin-text-secondary line-clamp-1">{comment.headline}</p>
                      </div>
                      <span className="text-[11px] text-linkedin-text-secondary shrink-0">{comment.time}</span>
                    </div>
                    <p className="text-sm text-white mt-1">{comment.text}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-1 ml-2 text-[11px] font-semibold text-linkedin-text-secondary">
                    <span className="hover:text-white cursor-pointer transition-colors">Like</span>
                    <span>•</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Reply</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;

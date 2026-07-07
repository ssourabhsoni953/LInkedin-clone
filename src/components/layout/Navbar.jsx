import React, { useState, useRef, useEffect } from 'react';
import { Search, Home, Users, Briefcase, MessageSquare, Bell, Grid, Compass } from 'lucide-react';
import { currentUser } from '../../data/mockData';
import { useNavigate, useLocation } from 'react-router-dom';

const NavItem = ({ icon: Icon, text, path, badge, isAvatar, onClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname === path && path !== undefined;

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (path) {
      navigate(path);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center cursor-pointer min-w-[80px] min-h-[52px] border-b-[2px] transition-colors ${active ? 'border-white text-white' : 'border-transparent text-linkedin-icon hover:text-white'}`}
    >
      <div className="relative flex flex-col items-center ">
        {isAvatar ? (
          <img src={currentUser.avatar} alt="Profile" className="w-7 h-7 rounded-full object-cover" />
        ) : (
          <Icon size={24} className={active ? 'text-white' : ''} />
        )}

        {badge && (
          <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] font-bold px-[5px] py-[1px] rounded-full leading-none flex items-center justify-center">
            {badge}
          </span>
        )}
        <span className="text-[12px] font-medium flex items-center gap-1 mt-1 leading-none pb-1">
          {text} {isAvatar && <span className="text-[8px] opacity-80 mt-[2px]">▼</span>}
        </span>
      </div>
    </div>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 h-[52px] bg-linkedin-card border-b border-linkedin-border z-50">
      <div className="max-w-[1128px] mx-auto px-4 h-full flex items-center justify-between">
        {/* Left Section - Logo & Search */}
        <div className="flex items-center gap-2">
          <div
            onClick={() => navigate('/')}
            className="w-[34px] h-[34px] bg-blue-600 rounded flex items-center justify-center text-[#FFFFFF] font-bold text-xl tracking-tighter cursor-pointer"
          >
            in
          </div>
          <div className="relative group lg:w-[280px]">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-linkedin-text-secondary pointer-events-none">
              <Search size={14} strokeWidth={5} />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="h-[34px] w-full bg-[#38434f] text-[#e9eaec] text-[14px] rounded transition-all focus:w-[320px] outline-none pl-10 pr-4 placeholder:text-linkedin-text-secondary placeholder:font-medium font-medium"
            />
          </div>
        </div>

        {/* Right Section - Navigation Icons */}
        <div className="flex h-full items-center">
          <div className="flex h-full hidden md:flex">
            <NavItem icon={Home} text="Home" path="/" />
            <NavItem icon={Users} text="My Network" path="/network" />
            <NavItem icon={Briefcase} text="Jobs" path="/jobs" />
            <NavItem icon={MessageSquare} text="Messaging" path="/messaging" />
            <NavItem icon={Bell} text="Notifications" badge="1" path="/notifications" />
            
            <div className="relative" ref={menuRef}>
              <NavItem isAvatar text="Me" onClick={() => setShowProfileMenu(!showProfileMenu)} />
              {showProfileMenu && (
                <div className="absolute top-[52px] -right-4 md:right-0 w-[264px] bg-linkedin-card border border-linkedin-border rounded-bl-lg rounded-br-lg shadow-xl z-50">
                  <div className="p-4 border-b border-linkedin-border">
                    <div className="flex items-start gap-3 mb-2">
                      <img src={currentUser.avatar} alt="Profile" className="w-14 h-14 rounded-full object-cover" />
                      <div>
                        <h3 className="text-white font-semibold leading-tight">{currentUser.name}</h3>
                        <p className="text-xs text-linkedin-text-secondary mt-1">{currentUser.headline}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => { navigate('/profile'); setShowProfileMenu(false); }}
                      className="w-full text-linkedin-primary border border-linkedin-primary rounded-full py-1 text-sm font-semibold hover:bg-linkedin-primary/10 transition-colors mt-2"
                    >
                      View Profile
                    </button>
                  </div>
                  <div className="p-2 border-b border-linkedin-border">
                    <h4 className="text-[13px] font-semibold text-white px-2 py-1">Account</h4>
                    <div onClick={() => { navigate('/settings'); setShowProfileMenu(false); }} className="block text-[13px] text-linkedin-text-secondary hover:underline px-2 py-1 transition-colors cursor-pointer">Settings & Privacy</div>
                    <div onClick={() => { navigate('/help'); setShowProfileMenu(false); }} className="block text-[13px] text-linkedin-text-secondary hover:underline px-2 py-1 transition-colors cursor-pointer">Help</div>
                    <div onClick={() => { navigate('/language'); setShowProfileMenu(false); }} className="block text-[13px] text-linkedin-text-secondary hover:underline px-2 py-1 transition-colors cursor-pointer">Language</div>
                  </div>
                  <div className="p-2">
                    <h4 className="text-[13px] font-semibold text-white px-2 py-1">Manage</h4>
                    <div onClick={() => { navigate('/activity'); setShowProfileMenu(false); }} className="block text-[13px] text-linkedin-text-secondary hover:underline px-2 py-1 transition-colors cursor-pointer">Posts & Activity</div>
                    <div onClick={() => { navigate('/signout'); setShowProfileMenu(false); }} className="block text-[13px] text-linkedin-text-secondary hover:underline px-2 py-1 transition-colors cursor-pointer">Sign Out</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="w-[1px] h-8 bg-linkedin-border mx-2 hidden md:block"></div>

          <div className="flex h-full hidden md:flex">
            <NavItem icon={Grid} text="For Business" />
            <NavItem icon={Compass} text="Sales Nav" badge="7" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

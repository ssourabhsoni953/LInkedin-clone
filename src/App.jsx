import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import CreatePostPage from './pages/CreatePostPage';
import Network from './pages/Network';
import Jobs from './pages/Jobs';
import Messaging from './pages/Messaging';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import Help from './pages/Help';
import Language from './pages/Language';
import Activity from './pages/Activity';
import SignOut from './pages/SignOut';
import NavAI from './components/NavAI';
import WelcomeModal from './components/WelcomeModal';
import { PostProvider } from './context/PostContext';

function App() {
  return (
    <PostProvider>
      <Router>
        <div className="min-h-screen bg-linkedin-bg pt-[82px] ">
          <Navbar />
          <main className="max-w-[1128px] mx-auto w-full px-0 sm:px-4 pb-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/create-post" element={<CreatePostPage />} />
              <Route path="/network" element={<Network />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/messaging" element={<Messaging />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/help" element={<Help />} />
              <Route path="/language" element={<Language />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/signout" element={<SignOut />} />
            </Routes>
          </main>
          <NavAI />
          <WelcomeModal />
        </div>
      </Router>
    </PostProvider>
  );
}

export default App;

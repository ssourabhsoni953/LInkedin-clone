import LeftSidebar from '../sidebar/LeftSidebar';
import RightSidebar from '../sidebar/RightSidebar';

const MainLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[225px_1fr] lg:grid-cols-[225px_555px_300px] gap-6 justify-center">
      <div className="hidden md:block">
        <LeftSidebar />
      </div>
      <div className="w-full max-w-[555px] mx-auto lg:mx-0">
        {/* Main Feed goes here */}
        {children}
      </div>
      <div className="hidden lg:block">
        <RightSidebar />
      </div>
    </div>
  );
};
export default MainLayout;




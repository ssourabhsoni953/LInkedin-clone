import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import FeedContainer from '../components/feed/FeedContainer';

const Home = () => {
  return (
    <MainLayout>
      <FeedContainer />
    </MainLayout>
  );
};

export default Home;

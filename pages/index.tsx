// pages/index.tsx
import React from 'react';
import HomePage, { getServerSideProps } from './Home/Home';
import { HomePageProps } from './Home/Home';

const IndexPage: React.FC<HomePageProps> = ({ posts }) => {
  return <HomePage posts={posts} />;
};

export { getServerSideProps };
export default IndexPage;

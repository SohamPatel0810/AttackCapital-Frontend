import { GetServerSideProps } from "next";
import PostList from "../../components/Post/PostList";
import { Post } from "../../components/common/Card/Card";
import api from "../../utils/api";
import { HomePageWrapper } from "./home.style";

interface HomePageProps {
  posts: Post[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await api.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/post/posts`
    );
    const posts: Post[] = response.data?.data;
    return {
      props: { posts },
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: { posts: [] },
    };
  }
};

const HomePage: React.FC<HomePageProps> = ({ posts }) => {
  return (
    <HomePageWrapper>
      <PostList posts={posts} />{" "}
    </HomePageWrapper>
  );
};

export default HomePage;
export type { HomePageProps };

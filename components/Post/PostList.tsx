import styled from 'styled-components';
import Card, { Post } from '../common/Card/Card';

const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const PostList: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <PostContainer>
      {posts.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </PostContainer>
  );
};

export default PostList;

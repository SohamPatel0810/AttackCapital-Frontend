import styled from "styled-components";
import { format } from "date-fns";

export interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

const CardContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  width: 300px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const CardDate = styled.p`
  font-size: 0.875rem;
  color: #555;
`;

const CardContent = styled.p`
  font-size: 1rem;
  color: #333;
`;

const Card: React.FC<{ post: Post }> = ({ post }) => {
  const dateParser = (date: string) => {
    const formatdate = new Date(date);
    return format(formatdate, " EEEE yyyy-MM-dd");
  };

  return (
    <CardContainer>
      <CardTitle>{post.title}</CardTitle>
      <CardDate>{dateParser(post.created_at)}</CardDate>
      <CardContent>{post.content}</CardContent>
    </CardContainer>
  );
};

export default Card;

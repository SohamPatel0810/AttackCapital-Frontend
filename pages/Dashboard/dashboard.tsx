import { useEffect, useState, FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { isAuthenticated } from "../../utils/auth";
import PostList from "../../components/Post/PostList";
import { DashboardWrapper, ModalWrapper } from "./dashboard.style";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ModalWrapper.setAppElement("#__next");

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    } else {
      fetchPosts();
    }
  }, [router]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/post/posts`,
        {
          headers: {
            token: `${localStorage.getItem("token")}`,
          },
          params: {
            authorId: localStorage.getItem("userId"),
          },
        }
      );
      setPosts(response?.data?.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const newPost = { title, content: body };
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/post/post`,
        newPost,
        {
          headers: {
            auth_token: `${localStorage.getItem("token")}`,
          },
        }
      );
      fetchPosts();
      setTitle("");
      setBody("");
      setModalIsOpen(false);
      toast.success("Post created successfully");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <DashboardWrapper>
      <ToastContainer />
      <button className="new-post" onClick={() => setModalIsOpen(true)}>
        Create New Post
      </button>
      <ModalWrapper
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="content">
          <h2>Create Post</h2>
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="Content"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <button className="new-post" type="submit">
              Create Post
            </button>
          </form>
        </div>
      </ModalWrapper>
      <PostList posts={posts} />
    </DashboardWrapper>
  );
};

export default Dashboard;

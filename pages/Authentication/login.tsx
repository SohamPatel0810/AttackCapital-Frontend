import { useState, FormEvent } from 'react';
import axios from "axios";
import { useRouter } from "next/router";
import { AuthenticationWrapper } from "./authentication.style";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/authentication/login`, { email, password });
      const token  = res.data?.data?.token; 
      const userId = res?.data?.data?.user?._id
      localStorage.setItem("token", token); 
      localStorage.setItem("userId",userId);
      toast.success("Login successful! Redirecting to home...");
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (err) {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <AuthenticationWrapper>
      <ToastContainer />
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button" type="submit">
            Login
          </button>
        </form>
      </div>
    </AuthenticationWrapper>
  );
};

export default Login;

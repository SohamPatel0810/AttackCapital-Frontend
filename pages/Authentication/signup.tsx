import { useState, FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { AuthenticationWrapper } from "./authentication.style";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/authentication/signup`, { email, password });
      toast.success("Signup successful! Redirecting to login...");
      setTimeout(() => {
        router.push("/login");
      }, 1000); // Redirect after 2 seconds
    } catch (err) {
      toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <AuthenticationWrapper>
      <ToastContainer />
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
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
            Sign Up
          </button>
        </form>
      </div>
    </AuthenticationWrapper>
  );
};

export default Signup;

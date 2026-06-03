import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const LoginPage = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const handleOtp=()=>{
    Math.floor(Math.random()*1000000)
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();

    const registeredUser = JSON.parse(localStorage.getItem("details"));

    if (!registeredUser) {
      toast.error("No registered user found");
      return;
    }

    if (
      userNameRef.current.value === registeredUser.email &&
      passwordRef.current.value === registeredUser.password
    ) {
      localStorage.setItem("isAuthenticated", "true");
      toast.success("Login Successful");

      setTimeout(() => {
        navigate("/home");
      }, 2000);
    } else {
      if (userNameRef.current.value === registeredUser.email) {
        toast.error("Invalid Password");
      } else {
        toast.error("Invalid Username");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-5">
      <h1 className="text-center mb-4">Login</h1>

      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Registered Email"
          ref={userNameRef}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter Password"
          ref={passwordRef}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary me-2">
        Sign In
      </button>

      <button type="reset" className="btn btn-warning">
        Cancel
      </button>

      <ToastContainer />
    </form>
  );
};

export default LoginPage;
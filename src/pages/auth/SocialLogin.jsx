import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../components/context/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: `Welcome ${res.user.displayName || "User"}!`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/"); // Redirect to home page
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: err.message,
        });
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: `Welcome ${res.user.displayName || "User"}!`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/"); // Redirect to home page
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: err.message,
        });
      });
  };

  return (
    <div className="mt-4 flex gap-4 w-full">
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline w-1/2 flex items-center gap-2"
      >
        <FcGoogle className="text-xl" /> Google
      </button>
      <button
        onClick={handleGithubLogin}
        className="btn btn-outline w-1/2 flex items-center gap-2"
      >
        <FaGithub className="text-xl" /> GitHub
      </button>
    </div>
  );
};

export default SocialLogin;

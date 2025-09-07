import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = ({ handleGoogleLogin, handleGithubLogin }) => {
  return (
    <div className="m-4">
      <div className="divider">OR</div>
      <div className="flex gap-4">
        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-1/2 flex items-center gap-2"
        >
          <FcGoogle className="text-xl" /> Google
        </button>

        {/* GitHub Login */}
        <button
          onClick={handleGithubLogin}
          className="btn btn-outline w-1/2 flex items-center gap-2"
        >
          <FaGithub className="text-xl" /> GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../components/context/AuthContext";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);

  return (
    <div className="mt-4 flex gap-4 w-full">
      <button
        onClick={() => googleLogin().then((res) => console.log(res.user))}
        className="btn btn-outline w-1/2 flex items-center gap-2"
      >
        <FcGoogle className="text-xl" /> Google
      </button>
      <button
        onClick={() => githubLogin().then((res) => console.log(res.user))}
        className="btn btn-outline w-1/2 flex items-center gap-2"
      >
        <FaGithub className="text-xl" /> GitHub
      </button>
    </div>
  );
};

export default SocialLogin;

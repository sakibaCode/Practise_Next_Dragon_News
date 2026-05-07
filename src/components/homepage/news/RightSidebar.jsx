import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div className="p-5">

      <h2 className="text-xl font-bold mb-4 text-center">
        Login / Signup
      </h2>

      <p className="text-sm text-gray-500 text-center mb-6">
        Choose a provider to continue
      </p>

      <div className="flex flex-col gap-3">

        {/* Google Login */}
        <button className="flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
          <FaGoogle />
          <span className="font-medium">Continue with Google</span>
        </button>

        {/* GitHub Login */}
        <button className="flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
          <FaGithub className="text-black" />
          <span className="font-medium">Continue with GitHub</span>
        </button>

      </div>

      <p className="text-xs text-gray-400 text-center mt-5">
        By continuing, you agree to our terms.
      </p>

    </div>
  );
};

export default RightSidebar;
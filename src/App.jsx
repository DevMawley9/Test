import { useState } from "react";

export default function App() {
  let [pstatus, showpstatus] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-emerald-500">
      <form className="p-8 rounded-md shadow-md w-96">
        <h1 className="mb-6 text-2xl text-center text-white">Sign Up</h1>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block mb-2 font-semibold text-white"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 font-semibold text-white"
          >
            Password
          </label>
          <input
            id="password"
            type={pstatus ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full p-2 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
            required
          />
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            showpstatus(!pstatus);
          }}
          aria-label={pstatus ? "Hide password" : "Show password"}
          className={`w-full py-2 text-white transition rounded-md ${
            pstatus ? "bg-green-700 hover:bg-green-800" : "bg-red-700 hover:bg-red-800 "
          }`}
        >
          {pstatus ? "Hide" : "Show"}
        </button>
       <div className="items-center justify-center text-center border-orange-500 ">
        <button className="items-center justify-center p-2 mt-2 text-xl bg-yellow-400 rounded-lg text-pretty r">Sing up</button>
        </div>
      </form>
    </div>
  );
}

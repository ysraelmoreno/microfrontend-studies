import React, { useState } from "react";

import { login, useLoggedIn } from "./cart";

export default function Login() {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("sally");
  const [password, setPassword] = useState("123");

  if (loggedIn) return null;

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className="ri-fingerprint-line text-2xl" id="showLogin"></i>
      </span>
      {showLogin && (
        <div
          className="absolute p-5 flex gap-2 flex-col rounded-sm shadow bg-white"
          style={{ width: 300, top: "2rem", right: 0 }}
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />
          <button
            id="loginbtn"
            onClick={() => login(username, password)}
            className="bg-green-900 text-white rounded py-2 px-5 rouded-md w-full"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
}

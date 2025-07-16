import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form
      action=""
      onClick={onSubmitHandler}
      className="min-h-[80vh] flex items-center"
    >
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "Sign Up" : "Login"} to book appointment
        </p>
        {state === "Sign Up" && (
          <div className="w-full ">
            <p>Name</p>
            <input
              type="text"
              placeholder="Enter your Name"
              className="border border-[#DADADA] rounded w-full p-2 mt-1"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
        <div className="w-full ">
          <p>Email</p>
          <input
            type="email"
            placeholder="Enter your Email"
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full ">
          <p>Password</p>
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-[#DADADA] rounded w-full p-2 mt-1"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-primary text-white w-full py-2 my-2 rounded-md text-base">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className={"text-primary underline cursor-pointer"}
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create an new account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className={"text-primary underline cursor-pointer"}
            >
              click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;

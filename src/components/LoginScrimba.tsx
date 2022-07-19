import React, { useState } from "react";

function LoginScrimba() {
  const [user, setUser] = useState({
    email: "",
    password1: "",
    password2: "",
    okayToEmail: true,
  });

  const [feedbackMessage, setFeedbackMessage] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    setFeedbackMessage("");
    if (user.password1 !== user.password2) {
      setFeedbackMessage("Passwords do not match");
      return;
    } else {
      setFeedbackMessage("Success");
    }
  }
  function handleChange(event: any) {
    console.log(event);
    const { name, value, type, checked } = event.target;
    setUser((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="h-screen bg-purple-800 flex">
      <form
        className="w-[400px] bg-white mx-auto my-auto p-16 rounded-lg shadow-2xl flex flex-col gap-8"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Email address"
          className="input input-bordered w-full max-w-xs"
          onChange={handleChange}
          name="email"
          value={user.email}
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs"
          onChange={handleChange}
          name="password1"
          value={user.password1}
        />
        <input
          type="password"
          placeholder="Confirm password"
          onChange={handleChange}
          className="input input-bordered w-full max-w-xs"
          name="password2"
          value={user.password2}
        />

        <div className="flex items-center gap-2">
          <input
            id="okayToEmail"
            type="checkbox"
            className="checkbox"
            name="okayToEmail"
            onChange={handleChange}
            checked={user.okayToEmail}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="btn bg-purple-800 text-purple-50 font-semibold">
          Sign up
        </button>
        {feedbackMessage && <h3>{feedbackMessage}</h3>}
      </form>
    </div>
  );
}

export default LoginScrimba;

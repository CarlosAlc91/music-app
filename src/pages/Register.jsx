/* 1. rafce */

import { Link } from "react-router-dom";

/* 2. regresar a App.jsx para renderizar */
const Register = () => {
  return (
    /* 3. regresar de app.jsx para empezar a estilizar */
    /* 4. definir la fuente en tailwind.config */
    <main className="font-urbanist min-h-screen bg-purple-bg text-white grid justify-center items-center">
      <form className="grid gap-4 ">
        <h2 className="uppercase font-semibold text-2xl">New account</h2>
        <div className="grid">
          <label className="text-white/50 text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="bg-transparent outline-none border-b border-yellow-border p-1 "
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="grid">
          <label className="text-white/50 text-sm" htmlFor="username">
            Username
          </label>
          <input
            className="bg-transparent outline-none border-b border-yellow-border p-1 "
            type="text"
            name="username"
            id="username"
          />
        </div>
        <div className="grid">
          <label className="text-white/50 text-sm" htmlFor="password">
            Password
          </label>
          <input
            className="bg-transparent outline-none border-b border-yellow-border p-1 "
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button className="bg-purple-gradient uppercase font-semibold max-w-max mx-auto px-6 py-1 rounded-full">
          Create
        </button>
        <Link className="text-center text-sm underline" to="/auth/login">
          Longin
        </Link>
      </form>
    </main>
  );
};
export default Register;

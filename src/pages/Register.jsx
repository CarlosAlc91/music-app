/* 1. rafce */

import { Link } from "react-router-dom";
import ContainerAuth from "../components/layout/ContainerAuth";

/* 2. regresar a App.jsx para renderizar */
const Register = () => {
  return (
    /* 3. regresar de app.jsx para empezar a estilizar */
    /* 4. definir la fuente en tailwind.config */
    /* 6. regresar de ContainerAuth, borrar los estilos de main */
    /* 7. llamar a ContainerAuth enves de main */
    <ContainerAuth>
      <header className="hidden sm:block sm:max-w-[350px]">
        <img src="/images/register-header.png" alt="" />
      </header>
      <form className="grid gap-7 w-[min(100%,_350px)] sm:w-[300px]">
        <h2 className="uppercase font-semibold text-4xl">New account</h2>
        <div className="grid gap-4">
          <label className="text-white/50" htmlFor="email">
            Email
          </label>
          <input
            className="bg-transparent outline-none border-b border-yellow-border p-1 "
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="grid gap-4">
          <label className="text-white/50" htmlFor="username">
            Username
          </label>
          <input
            className="bg-transparent outline-none border-b border-yellow-border p-1 "
            type="text"
            name="username"
            id="username"
          />
        </div>
        <div className="grid gap-4">
          <label className="text-white/50" htmlFor="password">
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
        <Link className="text-center underline" to="/auth/login">
          Longin
        </Link>
      </form>
    </ContainerAuth>
  );
};
/* 5. go to ContainerAuth.jsx */
export default Register;

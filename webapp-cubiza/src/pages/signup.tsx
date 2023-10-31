import React, {FormEvent} from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const signup = () => {

  function handleSubmit(e: FormEvent<HTMLInputElement>): void {
    e.preventDefault()
  }

  return (
    <Layout title="registrar">
      <div className="container m-auto my-5 flex text-black justify-center">
        <form onSubmit={e => handleSubmit} className="w-96 p-5 border-2 shadow-lg rounded bg-slate-300">
          <div className="text-center text-3xl mb-2">
            Registrar
          </div>
          <div className="py-3 flex flex-col">
            <label>Nombre</label>
            <input required className="p-2 rounded mt-1" type="text" />
          </div>
          <div className="py-3 flex flex-col">
            <label>Correo</label>
            <input required className="p-2 rounded mt-1" type="email" />
          </div>
          <div className="py-3 flex flex-col">
            <label>Contraseña</label>
            <input required className="p-2 rounded mt-1" type="password" />
          </div>
          <div className="py-3 flex flex-col">
            <label>Confirmar Contraseña</label>
            <input required className="p-2 rounded mt-1" type="password" />
          </div>
          <button className="bg-blue-800 mt-4 w-full p-2 rounded text-white">
            Registrar
          </button>
          <Link className="flex justify-center mt-5 text-blue-700" href="/signin">
            ?Ya tienes una cuenta? Accede
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default signup;

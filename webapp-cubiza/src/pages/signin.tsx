import React, {FormEvent, FormEventHandler} from 'react';
import Layout from "@/components/Layout";
import Link from "next/link";

const Signin = () => {

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
  }

  return (
    <Layout title="Autenticar">
      <div className="container m-auto my-5 flex text-black justify-center">
        <form onSubmit={handleSubmit} className="w-96 p-5 border-2 shadow-lg rounded bg-slate-300">
          <div className="text-center text-3xl mb-2">
            Iniciar Sesión
          </div>
          <div className="py-3 flex flex-col">
            <label>Correo</label>
            <input className="p-2 rounded mt-1" type="email" />
          </div>
          <div className="py-3 flex flex-col">
            <label>Contraseña</label>
            <input className="p-2 rounded mt-1" type="password" />
          </div>
          <button type="submit" className="bg-blue-800 mt-4 w-full p-2 rounded text-white">
            Iniciar
          </button>
          <Link className="flex justify-center mt-5 text-blue-700" href="/signin">
            ?No tienes una cuenta? Registrar
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default Signin;
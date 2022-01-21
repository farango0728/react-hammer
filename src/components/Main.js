import React from "react";
import car from "../assets/img/Car.png";

const Main = () => {
  return (
    <div className="z-20 grid lg:grid-cols-2">
      <div className="mt-10 ml-10 lg:ml-20 lg:mt-20">
        <p className="text-lg lg:text-2xl font-Nunito text-celeste">
          Seguro integral en el que puedes confiar
        </p>
        <p className="mt-5 text-3xl font-black lg:text-5xl text-azul font-Nunito">
          Confía en Hammer
        </p>
        <p className="mt-2 text-3xl font-black lg:text-5xl text-azul font-Nunito">
          Insurance ¡somos vecinos!{" "}
        </p>
        <p className="mt-4 lg:text-lg text-azul">
          Calidad en el trato al cliente y los mejores precios del mercado,
          amplias coberturas y facilidad en los pagos.
        </p>
        <div className="mt-8">
          <button className="px-4 py-3 text-white border rounded-lg w-28 lg:w-44 mr-7 bg-celeste">
            Servicios
          </button>
          <button className="px-4 py-3 border-2 rounded-lg text-azul w-38 lg:w-52 border-azul">
            Solicitar Presupuesto
          </button>
        </div>
      </div>
      <div className="z-20 ">
        <div className="mt-4">
          <img className="" src={car} alt="carro" />
        </div>
      </div>
    </div>
  );
};

export default Main;

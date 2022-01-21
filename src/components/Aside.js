import React from "react";
import grupo2 from "../assets/img/Grupo2.png";
import grupo3 from "../assets/img/Grupo3.png";
import grupo4 from "../assets/img/Grupo4.svg";
import grupo5 from "../assets/img/Grupo5.svg";

const Aside = () => {
  return (
    <div className="grid items-center justify-center mt-10 ml-10 sm:grid-cols-2 lg:flex">
      <img className="lg:mr-4" src={grupo5} alt="" />
      <p className="text-sm text-azul">(525 Reviews de Clientes)</p>
      <img src={grupo2} alt="" />
      <img src={grupo4} alt="" />
      <img className="" src={grupo3} alt="" />
    </div>
  );
};

export default Aside;

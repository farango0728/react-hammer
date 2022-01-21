import React from 'react';

const Card = ({title, descripcion, img, tamanio}) => {
  return (
    <div className="px-2 py-2 rounded-lg shadow-2xl h-72">
      <p className="ml-4 text-2xl font-extrabold text-azul font-Nunito">
        {title}
      </p>
      <p className="mt-3 ml-4 pr-14">{descripcion}</p>
      <div className="flex items-center space-x-6 align-bottom">
        <button className="px-4 py-2 mt-8 ml-4 font-semibold border rounded-lg font-Nunito border-celeste text-celeste">
          Ver más
        </button>

        <img className={tamanio} src={img} alt="" />
      </div>
    </div>
  );
};

export default Card;

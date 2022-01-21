import React from 'react';
import Header from './components/Header';
import grupo from '../src/assets/img/Grupo1.png'
import Main from './components/Main';
import Aside from './components/Aside';
import Card from './components/Card';
import car2 from '../src/assets/img/car2.png'
import house from '../src/assets/img/House.png'
import iceCream from '../src/assets/img/IceCream.png'
import hammer from '../src/assets/img/hammer1234.png'
import chat from '../src/assets/img/chat.svg'
import './App.css'

function App() {
  return (
    <div className="relative pt-1 overflow-x-hidden">
      <div className="">
        <img
          className="absolute hidden -top-44 -right-44 w-[800px] h-[800px] z-10 lg:block"
          src={grupo}
          alt=""
        />
      </div>
      <div className="fixed bottom-0 right-0 z-40 px-10 py-10">
        <button className="flex px-4 py-4 transition duration-500 transform shadow-xl mostrar hover:scale-x-110 rounded-3xl">
          <div className="hidden">
            <p className='text-azul'>¿En qué podemos ayudarte?</p>
            <p className='text-sm text-celeste'>Chatea con nosotros</p>
          </div>
          <img className="ml-2" src={chat} alt="" />
        </button>
      </div>
      <Header />
      <Main />
      <Aside />
      <h2 className="flex justify-center mt-20 text-lg lg:text-2xl font-Nunito text-celeste">
        Servicios
      </h2>
      <p className="flex justify-center mt-2 ml-10 text-2xl font-black lg:text-4xl font-Nunito text-azul lg:ml-0">
        Tu agente cercano: en Hammer Insurance nadie se queda atrás
      </p>
      <p className="flex justify-center mt-2 ml-10 lg:text-xl text-azul">
        En Hammer Insurance siempre hablamos tu idioma, conocemos tu comunidad,
        somos vecinos.
      </p>
      <div className="grid items-center justify-center py-10 space-x-5 sm:grid-cols-2 lg:mx-14 lg:grid-cols-4">
        <Card
          title="Auto"
          descripcion="Múltiples opciones y descuentos, SR-22. Te ofrecemos la cobertura perfecta. ¡siempre a tu lado cuando nos necesites!"
          img={car2}
          tamanio="h-28 w-32"
        />
        <Card
          title="Hogar"
          descripcion="Protege tu casa, propiedad en alquiler, casa móvil o seguro de inquilino. Elige entre múltiples opciones."
          img={house}
          tamanio="h-40 w-32"
        />
        <Card
          title="Negocio"
          descripcion="Asegura tu negocio, tus trabajadores, y cualquier vehículoculo commercial. General Liability, Workers Comp, Bonds etc."
          img={iceCream}
          tamanio="h-28 w-32"
        />
        <Card
          title="Placas"
          descripcion="Hammer renueva las placas y calcomanías de su auto, además de gestionar el cambio de propietario y demás tramitaciones."
          img={hammer}
          tamanio="h-28 w-32 pt-8 pb-4"
        />
      </div>
      <div className="flex items-center justify-center mb-10">
        <button className="px-4 py-2 text-xl font-bold border border-celeste rounded-xl text-celeste">
          Ver todos los servicios
        </button>
      </div>
    </div>
  );
}

export default App;

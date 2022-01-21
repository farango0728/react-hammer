import React, { useState } from "react";
import lenguaje from "../assets/img/lenguaje.svg";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(true);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="relative z-10 w-full">
      <div className="w-full">
        <div className="flex items-center justify-between w-full px-10 py-6 lg:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1 lg:hidden">
            <p className="text-3xl font-extrabold font-Nunito text-azul">
              HAMMER
            </p>
            <p className="ml-16 -mt-2 font-Inter text-celeste">Insurance</p>
          </div>
          <div className="-my-2 -mr-2 lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
              onClick={openMenu}
            >
              <span className="sr-only">Open menu</span>

              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* menu full */}
          <nav className="hidden space-x-12 lg:flex">
            <div className="mr-14">
              <p className="text-3xl font-extrabold font-Nunito text-azul">
                HAMMER
              </p>
              <p className="ml-16 -mt-2 font-Inter text-celeste">Insurance</p>
            </div>
            <div className="">
              <button
                type="button"
                className="inline-flex items-center text-base font-medium text-gray-500 bg-white rounded-md group hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-expanded="false"
              >
                <span className="text-lg font-bold font-Nunito text-azul hover:text-celeste">
                  Servicios
                </span>
                <svg
                  className="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <a
              href="/"
              className="items-center text-lg font-bold text-azul font-Nunito hover:text-celeste"
            >
              Pagos
            </a>
            <a
              href="/"
              className="items-center text-lg font-bold text-azul font-Nunito hover:text-celeste"
            >
              Oficinas
            </a>
            <a
              href="/"
              className="items-center text-lg font-bold text-azul font-Nunito hover:text-celeste"
            >
              Blog
            </a>
            <a
              href="/"
              className="items-center text-lg font-bold text-blancoB font-Nunito hover:text-celeste"
            >
              Nosotros
            </a>
            <a
              href="/"
              className="items-center text-lg font-bold text-blancoB font-Nunito hover:text-celeste"
            >
              Contacto
            </a>
            <div className="">
              <a
                href="/"
                className="px-4 py-3 text-lg font-bold border rounded-lg text-blancoB font-Nunito hover:text-celeste"
              >
                Pedir Presupuesto
              </a>
            </div>

            <a
              href="/"
              className="flex items-center -mt-5 space-x-2 text-lg font-bold text-blancoB font-Nunito hover:text-celeste"
            >
              <img className="mr-2" src={lenguaje} alt="idioma" />
              SPA
              <svg
                className="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </nav>
        </div>

        {/* menu responsive */}
        {menu ? (
          <div className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform lg:hidden">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div class="pt-5 pb-6 px-5">
                <div class="flex items-center justify-between">
                  <div class="-mr-2">
                    <button
                      type="button"
                      onClick={closeMenu}
                      class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span class="sr-only">Close menu</span>

                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="mt-6">
                  <nav class="grid gap-y-8">
                    <a
                      href="/"
                      class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span class="ml-3 font-bold text-azul font-Nunito hover:text-celeste">
                        Servicios
                      </span>
                    </a>
                    <a
                      href="/"
                      class="-m-3 p-2 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span class="ml-3 font-bold text-azul font-Nunito hover:text-celeste">
                        Contacto
                      </span>
                    </a>

                    <a
                      href="/"
                      class="-m-3 p-2 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span class="ml-3 font-bold text-azul font-Nunito hover:text-celeste">
                        Oficinas
                      </span>
                    </a>
                    <a
                      href="/"
                      class="-m-3 p-2 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span class="ml-3 font-bold text-azul font-Nunito hover:text-celeste">
                        Pedir Presupuesto
                      </span>
                    </a>

                    <span class="ml-3 text-base font-medium text-gray-900"></span>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h1></h1>
        )}
      </div>
    </div>
  );
};

export default Header;

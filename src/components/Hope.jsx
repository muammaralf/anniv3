import React from "react";
import { useState } from "react";

const Hope = () => {
  const [angka, setAngka] = useState(0);
  const [txt, setTxt] = useState("");
  const generate = () => {
    const harapan = [
      "Aku",
      "Harap",
      "Semoga",
      "Kita",
      "Bisa",
      "Jadi",
      "Orang",
      "Yang",
      "Lebih",
      "Baik",
      "Secara",
      "Lahir",
      "Ataupun",
      "Batin.",
      "Aku",
      "Selalu",
      "Bangga",
      "Sama",
      "Dedek.",
      "Semoga",
      "Impian",
      "Dedek,",
      "Impian",
      "Aku,",
      "Dan",
      "Impian",
      "Kita",
      "Akan",
      "Terwujud",
      "Satu",
      "Persatu.",
      "AAMIIN",
    ];

    if (angka < harapan.length) setTxt((txt) => (txt += harapan[angka]));
    // txt = txt + harapan[angka];
    if (angka != harapan.length - 1) setTxt((txt) => (txt += " "));
    if (angka >= harapan.length) setTxt((txt) => (txt += ""));
  };
  return (
    <>
      <div id="hope" className="h-screen">
        <nav className="">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4 border-b-2 ">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
                <li>
                  <a
                    href="#hero-section"
                    //   className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-black md:dark:text-blue-500"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#hal1"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                    // className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-black md:dark:text-blue-500"
                  >
                    Ucapan
                  </a>
                </li>
                <li>
                  <a
                    href="#hope"
                    className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-black md:dark:text-blue-500"
                    // className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                  >
                    Hope
                  </a>
                </li>
                <li>
                  <a
                    href="#memory"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                  >
                    Memory
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent"
                  >
                    Whatsapp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div
          className="blur-3 absolute inset-x-0  -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#eb79a8] to-[#5d53e2] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="h-full flex flex-col justify-center items-center py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <p className="mb-8 text-xl font-normal text-gray-300 lg:text-2xl sm:px-16 xl:px-54 dark:text-gray-700">
            {console.log(txt)}
            {txt}
          </p>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => {
              setAngka((angka) => angka + 1);
              generate();
            }}
          >
            Tekan untuk lihat kata selanjutnya
          </button>
        </div>
      </div>
    </>
  );
};

export default Hope;

import { useState } from "react";
import "../App.css"; // If you have other CSS files, import them here as well

function Current() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [toggleDropdown, settoggleDropdown] = useState(false);

  return (
    <div className={`${darkMode ? "bg-black" : "bg-white"} w-screen h-max`}>
      <div className="theme_change dark">
        <button
          className="absolute top-10 right-10 w-24 h-24"
          onClick={() => setDarkMode(!darkMode)}
        >
          <svg
            opacity={darkMode ? 0 : 1}
            className="absolute  w-24 h-24  fill-yellow-400 shadow-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5h-.027z" />
            <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708l.707-.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708l-.708-.707zm1.734 3.374a2 2 0 1 1 3.296 2.198c.199.281.372.582.516.898a3 3 0 1 0-4.84-3.225c.352.011.696.055 1.028.129zm4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377zM14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
          </svg>
          <svg
            opacity={darkMode ? 1 : 0}
            className="w-24 h-24 fill-white shadow-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
          </svg>
        </button>
      </div>
      <div className="body flex flex-col w-screen justify-center items-center">
        <div className="searchBar flex justify-between py-2 px-4 rounded-2xl border-[#1C4B45] border-8  mt-10 bg-[#B2F3EB] w-1/3 h-20">
          <input
            className="bg-transparent text-gray-800 font-bold text-2xl w-2/3 outline-none"
            placeholder="Search..."
            type="text"
            name="search"
            id="search"
          />
          <button>
            <svg
              className="scale-[2] m-2"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
              <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
            </svg>
          </button>
        </div>
        <div className="cardAdder relative flex justify-between py-2 px-4 rounded-2xl border-[#1C4B45] border-8  mt-10 bg-[#B2F3EB] w-1/3 h-20">
          <input
            className="bg-transparent text-gray-800 font-bold text-2xl w-1/2 outline-none"
            placeholder="New Card..."
            type="text"
            name="search"
            id="search"
          />
          <button
            onClick={() => settoggleDropdown(!toggleDropdown)}
            className=" bg-[#FFEBAE] flex items-center justify-evenly text-2xl border-gray-600 border-2 rounded-lg w-1/4 h-12  "
          >
            Jumbo
            <svg
              className="rotate-180 scale-[1.5]"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z" />
            </svg>
          </button>
          {toggleDropdown && (
            <div
              className="absolute top-12 right-0  mt-2 w-56  bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {/* Dropdown items */}
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Normal Card
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Element
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  trial
                </a>
              </div>
            </div>
          )}
          <button className=" bg-[#FFEBAE] text-2xl border-gray-600 border-2 rounded-lg w-1/6 h-12  ">
            Go
          </button>
        </div>
        <div className="jumboCard">
          <h1 className="text-4xl font-black mt-4">Full Stack</h1>
          <div className="innerCard">
            <h1 className="self-center items-center text-3xl font-bolder mt-4 text-center ">
              Front End
            </h1>
            <div>
              <div className="card">
                <h1>Languages</h1>
                <div>
                  <div className="item">HTML</div>
                  <div className="item">CSS</div>
                  <div className="item">javascript</div>
                  <div className="item">Markdown</div>
                </div>
              </div>
              <div className="card">
                <h1>Front End Libraries</h1>
                <div>
                  <div className="item">React</div>
                  <div className="item">jQuery</div>
                  <div className="item">moment.js</div>
                  <div className="item">poppin.js</div>
                  <div className="item">Vue</div>
                </div>
              </div>
              <div className="card">
                <h1>UI libraries</h1>
                <div>
                  <div className="item">Tailwind CSS</div>
                  <div className="item">Materialize</div>
                  <div className="item">Bootstrap</div>
                  <div className="item">Ant Design</div>
                </div>
              </div>
            </div>
          </div>
          <div className="innerCard">
            <h1 className="self-center items-center text-3xl font-bolder mt-4 text-center ">
              API
            </h1>
            <div>
              <div className="card">
                <h1>Languages</h1>
                <div>
                  <div className="item">json</div>
                  <div className="item">javascript</div>
                </div>
              </div>
              <div className="card">
                <h1>Back End Libraries</h1>
                <div>
                  <div className="item">ExpressJS</div>
                  <div className="item">ruby(grapa)</div>
                  <div className="item">laravel(lumen)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="innerCard">
            <h1 className="self-center items-center text-3xl font-bolder mt-4 text-center ">
              Back End
            </h1>
            <div>
              <div className="card">
                <h1>Languages</h1>
                <div>
                  <div className="item">SQL</div>
                  <div className="item">PHP</div>
                  <div className="item">javascript</div>
                  <div className="item">Go</div>
                </div>
              </div>
              <div className="card">
                <h1>Back End Frameworks</h1>
                <div>
                  <div className="item">NodeJS + ExpressJS</div>
                  <div className="item">Laravel</div>
                  <div className="item">Ruby on rails</div>
                  <div className="item">Django</div>
                  <div className="item">Phoenix</div>
                </div>
              </div>
              <div className="card">
                <h1>UI libraries</h1>
                <div>
                  <div className="item">Tailwind CSS</div>
                  <div className="item">Materialize</div>
                  <div className="item">Bootstrap</div>
                  <div className="item">Ant Design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Current;

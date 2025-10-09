import { useState } from "react";
import Logo from "./components/Logo";
import ThemeToggle from "./components/ThemeToggle";

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <section className={`container-app bg-gray-100 text-gray-900 ${!darkMode ?'dark:bg-gray-900 p-0 dark:text-amber-50' : ''} font-space`}>
        <header className="relative flex items-center justify-between mx-[1rem] sm:mx-[4rem] lg:mx-[12rem]">
          <a href="/* Aqui poner la web */">
            <Logo />
          </a>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode}/>
        </header>
        <main>
         <h1 className="pt-10 mx-[3rem] text-center text-[1.25rem] md:text-3xl lg:text-4xl lg:font-bold">Discover Your Next Favorite Film</h1>
         <p className="pt-4 mx-[2rem] text-center text-[.75rem] md:text-[1rem]">Search, explore, and build your personal movie watchlist.</p>
        </main>
      </section>
    </>
  );
}

export default App;


/* 


className={`lg:cursor-pointer ${!darkMode ?'opacity-100 transition-opacity duration-75' :'opacity-0 transition-opacity duration-75'}`}

*/

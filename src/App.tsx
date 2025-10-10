import { useState , useEffect } from "react";
import Logo from "./components/Logo";
import ThemeToggle from "./components/ThemeToggle";
import InputSearch from "./components/InputSearch";
import FilterBtns from "./components/FilterBtns";

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const[valueInput, setValueInput] = useState('')
  const[selectGenre, setSelectGente] = useState<string[]>([])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  console.log(darkMode)
  return (
    <>
      <section className={`container-app p-0 font-space  ${darkMode ?'bg-gray-100 text-gray-900' : 'dark:bg-gray-900 dark:text-amber-50'} `}>
        <header className="relative flex items-center justify-between mx-[1rem] sm:mx-[4rem] lg:mx-[12rem]">
          <a href="/* Aqui poner la web */">
            <Logo />
          </a>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode}/> 
        </header>
        <main>
         <h1 className="pt-10 mx-[3rem] text-center text-[1.25rem] md:text-3xl lg:text-4xl lg:font-bold">Discover Your Next Favorite Film</h1>
         <p className="pt-4 mx-[2rem] text-center text-[.75rem] md:text-[1rem]">Search, explore, and build your personal movie watchlist.</p>
         <InputSearch darkMode={darkMode} valueInput={valueInput} setValueInput={setValueInput}/>
         <FilterBtns selectGenre={selectGenre} setSelectGenre={setSelectGente}/>
         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </main>
      </section>
    </>
  );
}

export default App;


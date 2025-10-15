import { useEffect, useState } from "react";
import Logo from "./components/Logo";
import ThemeToggle from "./components/ThemeToggle";
import InputSearch from "./components/InputSearch";
import FilterBtns from "./components/FilterBtns";
//import MovieError from "./components/movieError";
//import MovieSucces from "./components/MovieSucces";
//import MovieSearch from "./components/MovieSearch";
import MoviesGallery from "./components/MoviesGallery";

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const[valueInput, setValueInput] = useState('')
  const[selectGenre, setSelectGenre] = useState<string[]>([])
  const[movieGallery, setMovieGallery] = useState<[]>([])
 // const[movieResponse, setMovieResponse] = useState('')
 // const[movieResult, setMovieResult] = useState({})

 
 
 useEffect(() => {
   const getMovies = () => {
     const url = `https://api.themoviedb.org/3/movie/popular?language=es-ES&page=1`;
     const optionsApi = {
      headers: {
         Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDk5NGI4ZThlYTM5ZWQ1NzVmYzg0NTBkMzRmYzRjNSIsIm5iZiI6MTc2MDQyNDM5NC44MDQsInN1YiI6IjY4ZWRmMWNhOTIxOTI2N2IzMTlkZjAwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oM7C-EZtKj-FAlFjEaED1hkQx4kPAR_vARZsBY1MEgc'
      } 
    }

    fetch(url, optionsApi)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        setMovieGallery(json.results)
      })
    
  }

  getMovies()

}, [])

console.log(movieGallery)



  return (
    <>
      <section className={`container-app p-0 font-space  ${darkMode ?'bg-gray-100 text-gray-900' : 'bg-gray-900 text-amber-50'} `}>
        <header className="relative flex items-center justify-between mx-[1rem] sm:mx-[4rem] lg:mx-[12rem]">
          <a href="/* Aqui poner la web */">
            <Logo />
          </a>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode}/> 
        </header>
        <main>
         <h1 className="pt-10 mx-[3rem] text-center text-[1.25rem] md:text-3xl lg:text-4xl lg:font-bold">Discover Your Next Favorite Film</h1>
         <p className="pt-4 mx-[2rem] text-center text-[.75rem] md:text-[1rem]">Search, explore, and build your personal movie watchlist.</p>
         <InputSearch darkMode={darkMode} valueInput={valueInput} setValueInput={setValueInput} />
         <FilterBtns selectGenre={selectGenre} setSelectGenre={setSelectGenre}/>
         <MoviesGallery movieGallery={movieGallery}/>
         {/* Aqui debo crear 2 resultados depeniendo de la respuesta */}
        {/*  {
          movieResponse === 'True' ? <MovieSucces /> : <MovieSearch />
         } */}
         <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </main>
      </section>
    </>
  );
}

export default App;



/* 




  useEffect(() => { 
  const searchMovies = async () => {

const optionsApi = {
  headers: {
     Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDk5NGI4ZThlYTM5ZWQ1NzVmYzg0NTBkMzRmYzRjNSIsIm5iZiI6MTc2MDQyNDM5NC44MDQsInN1YiI6IjY4ZWRmMWNhOTIxOTI2N2IzMTlkZjAwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oM7C-EZtKj-FAlFjEaED1hkQx4kPAR_vARZsBY1MEgc'
  } 
}

const url = `https://api.themoviedb.org/3/movie/popular`;

try {
   const res = await fetch(url,optionsApi);
   if (!res.ok) {throw new Error(`HTTP error! status: ${res.status}`)}

   const json = await res.json();
   setMovieResult(json)
   console.log(movieResult)

} catch (error) {
  console.error('Error al cargar la API:', error)
}
  };

  searchMovies();

}, [])
  
 



*/

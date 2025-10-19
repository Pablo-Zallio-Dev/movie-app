import iconFilm from '../assets/icons/film.svg'
import star from "../assets/icons/star.svg";
import notImage from "../assets/images/image-notImage.jpg"



interface MovieDataSearch {
  title: string;
  //genre_ids: GenreId;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
}


type MovieSuccesProp = {
    movieResult: MovieDataSearch[] 
    darkMode: boolean;
}


const imageBaseUrl = "https://image.tmdb.org/t/p/w500";


function MovieSucces({ movieResult, darkMode }: MovieSuccesProp) {

    const movieSearch = [...movieResult].sort((a, b) => {
        const dataA = a.release_date || "0000-01-01";
        const dataB = b.release_date || "0000-01-01";

        if(dataA < dataB) return 1;
        if(dataA > dataB) return -1;
        return 0;
    })
   

if(movieSearch.length === 0 ){
    return(
        <>
        <section className=" flex flex-col items-center gap-3.5 w-[90%] mx-auto my-[2rem] py-[4rem] border border-dashed border-blue-900">
            <img src={iconFilm} alt="" />
            <h2 className='font-bold text-2xl'>No movies found</h2>
            <p className=''>Try adjusting your search or filters.</p>
        </section> 
        </>
    )
}

return (
    <>
    <section  className=" flex justify-center  gap-[.75rem] min-[1200px]:gap-[2.25rem] flex-wrap mx-[1rem] sm:mx-[4rem] lg:mx-[8rem] py-[3rem]">
      {movieSearch.map((movie, movieIndex) => (
          <section
            className={`relative w-[200px] md:w-[220px] max-w-[220px] lg:max-w-[240px] group rounded-[.5rem]  overflow-hidden ${
              darkMode ? "bg-[#F3F4F6]" : "bg-[#3C4096]"
            } `}
            key={movieIndex}
          >
            {/* ${imageBaseUrl}${movie.poster_path} */}
            <img
              className={` w-full opacity-80 h-full object-cover group-hover:opacity-100 transition:opacity duration-150`}
              src={movie.poster_path === null ? notImage : `${imageBaseUrl}${movie.poster_path}`}
              alt=""
            />
            <section
              className={` absolute flex flex-col justify-between gap-1 bottom-0 w-full min-[444px]:h-[20%]  px-[.75rem] py-[.5rem] text-[.8rem]   ${
                darkMode ? "bg-[#e7e8fad9]" : "bg-[#000000a5]"
              } `}
            >
              <p className={`  `}>
                {movie.title.length > 25
                  ? `${movie.title.slice(0, 22)}...`
                  : `${movie.title}`}
              </p>
              <section className={`flex justify-between py-1`}>
                <p className=" text-[.75rem] font-light  ">
                  {movie.release_date ? movie.release_date.slice(0, 4) : "N/A"}
                </p>
                <section className={` flex items-center gap-[.15rem] px-[.3rem] rounded-[1rem] ${darkMode ?'bg-[#f3f4f6]' :'bg-gray-900'} `}>
                  <img src={star} alt="" />
                  <p className=" text-[.7rem] font-extralight ">
                    {movie.vote_average.toFixed(2)}
                  </p>
                </section>
              </section>
            </section>
          </section>
        ))}
    </section>
    </>
)
}

export default MovieSucces;

/* 

 {
        movieResult.map((movie, movieIndex) => (
            <p key={movieIndex}> { movie.title } </p>
        ))
    }


 <section className=" flex flex-col items-center gap-3.5 w-[90%] mx-auto my-[2rem] py-[4rem] border border-dashed border-blue-900">
            <img src={iconFilm} alt="" />
            <h2 className='font-bold text-2xl'>No movies found</h2>
            <p className=''>Try adjusting your search or filters.</p>
        </section>
        
        
        */
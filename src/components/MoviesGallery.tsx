import star from "../assets/icons/star.svg";
import "../components/css/MoviesGallery.css";

interface GenreId {
  id: number[];
}

interface MovieData {
  title: string;
  genre_ids: GenreId;
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

type MoviesGalleryProp = {
  movieGallery: MovieData[] 
  movieNext: MovieData[] 
  darkMode: boolean;
};

const imageBaseUrl = "https://image.tmdb.org/t/p/w500";




function MoviesGallery({ movieNext, movieGallery, darkMode }: MoviesGalleryProp) {


  const moviePopular = [...movieGallery].sort((a, b) => {
      const dataA = a.release_date || "0000-01-01";
      const dataB = b.release_date || "0000-01-01";
  
      if(dataA < dataB) return 1;
      if(dataA > dataB) return -1;
      return 0;
  })

    const movieNexts = [...movieNext].sort((a, b) => {
      const dataA = a.release_date || "0000-01-01";
      const dataB = b.release_date || "0000-01-01";
  
      if(dataA < dataB) return 1;
      if(dataA > dataB) return -1;
      return 0;
  })

  if (moviePopular === null || movieNext === null) {
    return (
      <>
        <h2>Null</h2>
      </>
    );
  }

  return (
    <>
      <section className="flex flex-col mt-[8rem] ">
        <h2 className="mx-[1rem] sm:mx-[4rem] lg:mx-[12rem] text-[1.5rem] font-bold ">Most Populars</h2>
        <section className=" flex justify-center  gap-[.75rem] min-[1200px]:gap-[2.25rem] flex-wrap mx-[1rem] sm:mx-[4rem] lg:mx-[8rem] py-[3rem]">

    


          {moviePopular.map((movie, movieIndex) => (




          <section
            className={`relative w-[200px] md:w-[220px] max-w-[220px] lg:max-w-[240px] group rounded-[.5rem]  overflow-hidden ${
              darkMode ? "bg-[#F3F4F6]" : "bg-[#3C4096]"
            } `}
            key={movieIndex}
          >
            <img
              className={` w-full opacity-80 h-full object-cover group-hover:opacity-100 transition:opacity duration-150`}
              src={`${imageBaseUrl}${movie.poster_path}`}
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
                    {movie.vote_average.toFixed(1)}
                  </p>
                </section>
              </section>
            </section>
          </section>
        ))}
        </section>
      </section>
       <section className="flex flex-col mt-[8rem] ">
        <h2 className="mx-[1rem] sm:mx-[4rem] lg:mx-[12rem] text-[1.5rem] font-bold ">Coming</h2>
        <section className=" flex justify-center  gap-[.75rem] min-[1200px]:gap-[2.25rem] flex-wrap mx-[1rem] sm:mx-[4rem] lg:mx-[8rem] py-[3rem]">
          {movieNexts.map((movie, movieIndex) => (
          <section
            className={`relative w-[200px] md:w-[220px] max-w-[220px] lg:max-w-[240px] group rounded-[.5rem]  overflow-hidden ${
              darkMode ? "bg-[#F3F4F6]" : "bg-[#3C4096]"
            } `}
            key={movieIndex}
          >
            <img
              className={` w-full opacity-80 h-full object-cover group-hover:opacity-100 transition:opacity duration-150`}
              src={`${imageBaseUrl}${movie.poster_path}`}
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
                    {movie.vote_average.toFixed(1)}
                  </p>
                </section>
              </section>
            </section>
          </section>
        ))}
        </section>
      </section>
    </>
  );
}

export default MoviesGallery;

/* 
 <section className={`min-[444px]:hidden px-[.75rem] py-1 ${darkMode ?'bg-[#E7E8FA]' :'bg-[#3C4096]'} `}>
            </section>

absolute  w-full h-[25%] ${darkMode ?'bg-[#E7E8FA]' :'bg-[#3C4096]'} bottom-0 

<>
      <section className=" grid  min-[550px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center gap-6 p-[4rem] 2xl:px-[12rem] ">
        {movieGallery.map((movie, movieIndex) => (
           
          <section
            className={`relative h-[360px] w-[250px] min-[530px]:w-[220px] rounded-[.5rem] overflow-hidden `}
            style={{backgroundImage: `${imageBaseUrl}${movie.poster_path}`}}
            key={movieIndex}
          >
            <img className="absolute h-full w-full rounded-b-[.5rem]" src={`${imageBaseUrl}${movie.poster_path}`} alt="" />
            <section className=" rounded-[.5rem] absolute z-50 flex flex-col justify-end w-full  h-full bg-card-hero">
              <section
                className=" rounded-b-[.4rem] flex flex-col justify-center h-[7rem] px-5  "
                style={{ backgroundColor: "#000000c0" }}
              >
                
                <p className=" mb-2  text-[.85rem] font-bold ">{movie.title}</p>
                <section className="flex justify-between ">
                  <p className=" text-[.75rem] font-light  ">
                    {movie.release_date
                      ? movie.release_date.slice(0, 4)
                      : "N/A"}
                  </p>
                  <section className="flex items-center gap-[.15rem] px-[.3rem] rounded-[1rem] bg-gray-900 ">
                    <img src={star} alt="" />
                    <p className=" text-[.7rem] font-extralight ">
                      {movie.vote_average.toFixed(1)}
                    </p>
                  </section>
                </section>
              </section>
            </section>
          </section>
        ))}
      </section>
    </>
    
    
    */

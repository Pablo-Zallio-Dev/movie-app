import star from "../assets/icons/star.svg";
import "../components/css/MoviesGallery.css";

interface MovieData {
  title: string;
  id: number,
  poster_path: string;
  release_date: string;
  vote_average: number;
  overview: string;
}

type MoviesGalleryProp = {
  movieGallery: MovieData[];
};


function MoviesGallery({ movieGallery }: MoviesGalleryProp) {
    console.log(movieGallery);

  

  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'
  /* 
    
    min-[500px]:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6
    
    */

  return (
    <>
      <section className=" grid  min-[550px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center gap-6 p-[4rem] 2xl:px-[12rem] ">
        {movieGallery.map((movie, movieIndex) => (
           
          <section
            className={`relative h-[360px] w-[250px] min-[530px]:w-[220px] rounded-[.5rem] overflow-hidden `}
            style={{backgroundImage: `${imageBaseUrl}${movie.poster_path}`}}
            key={movieIndex}
          >
            <img className="absolute rounded-b-[.5rem]" src={`${imageBaseUrl}${movie.poster_path}`} alt="" />
            <section className=" rounded-[.5rem] absolute z-50 flex flex-col justify-end w-full  h-[330px] bg-card-hero">
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
  );
}

export default MoviesGallery;

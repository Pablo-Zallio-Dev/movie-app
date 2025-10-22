type GenreBtnsProps = {
  setSelectGenre: React.Dispatch<React.SetStateAction<number[]>>;
};
function GenreSelect({ setSelectGenre }: GenreBtnsProps) {
  const genres = [
    { value: 0, label: "Select genre..." },

    { value: 28, label: "Action" },
    { value: 12, label: "Adventure" },
    { value: 25, label: "Animation" },
    { value: 35, label: "Comedy" },
    { value: 80, label: "Crime" },
    { value: 18, label: "Drama" },
    { value: 14, label: "Fantasy" },
    { value: 27, label: "Horror" },
    { value: 9648, label: "Mystery" },
    { value: 10749, label: "Romance" },
    { value: 878, label: "Sci-fi" },
    { value: 53, label: "Thriller" },
    { value: 37, label: "Western" },
  ];

  const handleGenreClick = (genreValue: number) => {
    setSelectGenre([genreValue]);
  };

  return (
    <>
      <section className="mx-[1rem] sm:mx-[4rem] lg:mx-[12rem]">
        <h2 className="my-2 2xl:text-center">Filter by Genre</h2>

        <form action="#" className="lg:hidden">
          <select
            className="focus:outline-2 outline-[#26295a] px-2 py-2 text-amber-50]"
            name="genres"
            id="genre"
            onChange={(e) => handleGenreClick(Number(e.target.value))}
          >
            {genres.map((genre, genreIndex) => (
              <option
                className="text-[#26295a]"
                value={genre.value}
                key={genreIndex}
              >
                {genre.label}
              </option>
            ))}
          </select>
        </form>
      </section>
    </>
  );
}

export default GenreSelect;

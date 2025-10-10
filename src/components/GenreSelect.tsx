function GenreSelect() {

    const genres = [
  { value: 'action', label: 'Action' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'animation', label: 'Animation' },
  { value: 'comedy', label: 'Comedy' },
  { value: 'crime', label: 'Crime' },
  { value: 'drama', label: 'Drama' },
  { value: 'fantasy', label: 'Fantasy' },
  { value: 'horror', label: 'Horror' },
  { value: 'mystery', label: 'Mystery' },
  { value: 'romance', label: 'Romance' },
  { value: 'sci-fi', label: 'Sci-fi' },
  { value: 'thriller', label: 'Thriller' },
  { value: 'western', label: 'Western' },
];



    return(
        <>
        <section className="mx-[1rem] sm:mx-[4rem] lg:mx-[12rem]">
            <h2 className="my-2 2xl:text-center">Filter by Genre</h2>

            <form action="#" className="lg:hidden">
                <select className="focus:outline-2 outline-[#26295a] px-2 py-2 text-amber-50]" name="genres" id="genre">
                    {
                        genres.map((genre, genreIndex) => (
                            <option className="text-[#26295a]" value={genre.value} key={genreIndex}>{genre.label}</option>
                        ))
                    }
                </select>
            </form>

           
        </section>
        </>
    )
}

export default GenreSelect;

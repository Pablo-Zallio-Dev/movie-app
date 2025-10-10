import verifyIcon from '../assets/icons/verify.svg'

type GenreBtnsProps = {
  selectGenre: string[];
  setSelectGenre: React.Dispatch<React.SetStateAction<string[   ]>>;
};

function GenreBtns({ selectGenre, setSelectGenre }: GenreBtnsProps) {

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

const handleGenreClick = (genreValue: string) => {
    if (selectGenre.includes(genreValue)) {
      setSelectGenre(selectGenre.filter(g => g !== genreValue));
      console.log("Deseleccionado:", genreValue);
    } else {
      setSelectGenre([...selectGenre, genreValue]);
      console.log("Seleccionado:", genreValue);
    }
  };



  
  return (
      <>
    <section className="hidden lg:flex justify-center flex-wrap gap-4 mt-6  sm:mx-[4rem] lg:mx-[12rem] 2xl:w-[800px] 2xl:mx-auto">
      {
          genres.map((genre, genreIndex) => (
            <button
          className={`flex gap-2.5 border-2 border-[#26295a] rounded-[.4rem] px-4 py-0.5 text-[.9rem] cursor-pointer hover:bg-[#D5A439] hover:text-[#26295a] ${selectGenre.includes(genre.value) ?'bg-[#534428] text-[#ffffff] border-[#D5A439]':''}`}
          value="action"
          onClick={() => handleGenreClick(genre.value)}
          key={genreIndex}
        >
            {
                selectGenre.includes(genre.value)
                ? <img className='inline w-3.5' src={selectGenre.includes(genre.value) ? verifyIcon : ''} alt="" />
                :''
            }
          {genre.label}
        </button>
        ))
      }
      </section>
    </>
  );
}

export default GenreBtns;

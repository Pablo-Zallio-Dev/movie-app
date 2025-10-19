import verifyIcon from '../assets/icons/verify.svg'

type GenreBtnsProps = {
  selectGenre: number[];
  setSelectGenre: React.Dispatch<React.SetStateAction<number[]>>;
};

function GenreBtns({ selectGenre, setSelectGenre }: GenreBtnsProps) {

    const genres = [
 { value: 28, label: 'Action' },
  { value: 12, label: 'Adventure' },
  { value: 25, label: 'Animation' },
  { value: 35, label: 'Comedy' },
  { value: 80, label: 'Crime' },
  { value: 18, label: 'Drama' },
  { value: 14, label: 'Fantasy' },
  { value: 27, label: 'Horror' },
  { value: 9648, label: 'Mystery' },
  { value: 10749, label: 'Romance' },
  { value: 878, label: 'Sci-fi' },
  { value: 53, label: 'Thriller' },
  { value: 37, label: 'Western' },
];

const handleGenreClick = (genreValue: number) => {
    if (selectGenre.includes(genreValue)) {
      setSelectGenre(selectGenre.filter(g => g !== genreValue));
    } else {
      setSelectGenre([...selectGenre, genreValue]);
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
          onClick={() => handleGenreClick(Number(genre.value))}
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

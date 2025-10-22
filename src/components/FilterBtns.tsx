import GenreBtns from "./GenreBtns";
import GenreSelect from "./GenreSelect";

type FilterBtnsProps = {
  selectGenre: number[];
  setSelectGenre: React.Dispatch<React.SetStateAction<number[]>>;
};

function FilterBtns({ selectGenre, setSelectGenre }: FilterBtnsProps) {
  return (
    <>
      <GenreSelect setSelectGenre={setSelectGenre} />
      <GenreBtns selectGenre={selectGenre} setSelectGenre={setSelectGenre} />
    </>
  );
}

export default FilterBtns;

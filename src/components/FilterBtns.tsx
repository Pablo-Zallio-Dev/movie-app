import GenreBtns from "./GenreBtns";
import GenreSelect from "./GenreSelect";

type FilterBtnsProps = {
    selectGenre: string
    setSelectGenre: React.Dispatch<React.SetStateAction<string>>
}

function FilterBtns({selectGenre, setSelectGenre}: FilterBtnsProps) {


    return(
        <>
        <GenreSelect />
        <GenreBtns selectGenre={selectGenre} setSelectGenre={setSelectGenre}/>
        </>
    )
}

export default FilterBtns;




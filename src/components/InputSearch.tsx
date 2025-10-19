import loupe from '../assets/icons/zoom.svg'
import closeInput from '../assets/icons/closeInput.svg'

type InputSearchProps = {
    darkMode: boolean
    valueInput: string
    setValueInput: React.Dispatch<React.SetStateAction<string>>
    getResponse: (() => void)
    movieResponse: boolean
    setMovieResponse: React.Dispatch<React.SetStateAction<boolean>>
}

function InputSearch({darkMode, valueInput, setValueInput, getResponse, setMovieResponse}: InputSearchProps){
    function displayBtn(e: React.ChangeEvent<HTMLInputElement>) {
        setValueInput(e.target.value)
        setMovieResponse(true)
    }
    
    function resetInput() {
        setValueInput('')
    }


    return(
        <>
        <section className="flex justify-center py-9">
           <section className={`flex w-[75%] lg:w-[60%] xl:w-[40%] px-2 rounded-full ${ darkMode ?'bg-[#e7e8fa]':'bg-[#3c4096]'}`}>
            <img className='p-3' src={loupe} alt="Loupe image" />
            <input className={`w-full focus:outline-0 ${darkMode ?'placeholder-[#575f5e]' :''}`} type="text" name="" id="" placeholder='Search by title, year... ' onChange={(e) => { displayBtn(e); getResponse(); }} value={valueInput}/>
            <img className={`${valueInput.length > 0 ? 'block' : 'hidden'}`} src={closeInput} alt="Close icon" onClick={resetInput}/>
           </section>
        </section>
        </>
    )
}
export default InputSearch;

/*  fc8664c7

    1060375-cineexpl-F69F15B9

*/
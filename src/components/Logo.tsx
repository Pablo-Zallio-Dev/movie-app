
import iconLogo from '../assets/icons/clapperboard.svg'


function Logo(){
    return(
        <>
        <section className="flex h-[64px] items-center gap-[.5rem]">
        <img src={iconLogo} alt="logo icon" />
        <p className='text-[1.25rem] font-bold tracking-tighter'>Cine Explorer</p>
        </section>
        </>
    )
}

export default Logo;
import iconMoon from '../assets/icons/moon.svg'
import iconSun from '../assets/icons/sun.svg'

type ThemeToggleProps = {
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {

    function changeTheme() {
        console.log("Prueba")
        setDarkMode(!darkMode)
    }

    return (
        <>
            <section className="">
                
                <img className={`absolute top-[1.25rem] right-0.5 lg:cursor-pointer ${darkMode ?'opacity-100 transition-opacity duration-200' :'opacity-0 transition-opacity duration-200'}`} src={iconSun} alt="Theme Icon" onClick={changeTheme} />
                <img className={`absolute top-[1.25rem] right-0.5 lg:cursor-pointer ${darkMode ?'opacity-0 transition-opacity duration-200' :'opacity-100 transition-opacity duration-200'}`} src={iconMoon} alt="Theme Icon" onClick={changeTheme} />
                
            </section>
        </>
    )
}

export default ThemeToggle;



/* 

*/
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faMusic,faMoon,faSun } from "@fortawesome/free-solid-svg-icons"

const Nav = ({setLibraryStatus, libraryStatus, setDarkMode, darkMode }) => {

    const mode = () => {
        if(darkMode){
            return 'Dark Mode'
        }
        else{
            return 'Light Mode'
        }
    }

    return(
        <nav>
            <h1>Kevin's Audio</h1>
            <button onClick={() => setDarkMode(!darkMode)}>
                {mode()}
                <FontAwesomeIcon icon={darkMode ? faMoon : faSun} transform="right-4" />
            </button>
            <button onClick={() => setLibraryStatus(!libraryStatus)}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav;
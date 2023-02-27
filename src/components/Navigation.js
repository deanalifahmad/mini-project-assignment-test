import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
    const [showMenu, setShowMenu] = React.useState(false)

    let menus
    let menuMask

    if(showMenu){
        menus = 
            <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow">
                The menu
            </div>

        menuMask = 
            <div className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50" onClick={() => setShowMenu(false)}>
            </div>
    }

    return(
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>

            { menuMask }

            { menus }
        </nav>
    );
}
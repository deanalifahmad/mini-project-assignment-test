import React from "react";
import Menus from "./Menus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from '@react-spring/web';

export default function Navigation() {
    const [showMenu, setShowMenu] = React.useState(false)

    const maskTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(100%)' },
    });

    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: 'translateX(100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(100%)' },
    });

    return(
        <nav>
            <span className="text-xl text-alerange">
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>

            {
                maskTransitions((styles, item) =>
                item && 
                <animated.div 
                    key={item} 
                    style={styles}
                    className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                    onClick={() => setShowMenu(false)}
                >
                </animated.div>
                )
            }
            {
                menuTransitions((styles, item) =>
                item && 
                <animated.div 
                    key={item} 
                    style={styles}
                    className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow p-3 flex flex-col"
                >
                        <Menus 
                            closeMenu={() => setShowMenu(false)}
                        />
                </animated.div>
                )
            }
        </nav>
    );
}
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from '@react-spring/web'

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

    // const maskTransitions = useTransition(showMenu, null, {
    //     from: { position: 'absolute', opacity: 0 },
    //     enter: { opacity: 1 },
    //     leave: { opacity: 0 },
    // });

    // const menuTransitions = useTransition(showMenu, null, {
    //     from: { opacity: 0, transform: 'translateX(-100%)' },
    //     enter: { opacity: 1, transform: 'translateX(0%)' },
    //     leave: { opacity: 0, transform: 'translateX(-100%)' },
    // })

    // className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
    // className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50" onClick={() => setShowMenu(false)}
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
                    <h1 className="mb-3 font-bold text-alerange">
                        Menus
                    </h1>
                    <ul>
                        <li className="py-2 border-t border-slate-200 w-full">
                            <a href="/" className="font-medium hover:text-alerange">Home</a>
                        </li>
                        <li className="py-2 border-y border-slate-200 w-full">
                            <a href="/" className="font-medium hover:text-alerange">Menu 2</a>
                        </li>
                        <li className="py-2 border-b border-slate-100 w-full">
                            <a href="/" className="font-medium hover:text-alerange">Menu 3</a>
                        </li>
                    </ul>
                </animated.div>
                )
            }
        </nav>
    );
}
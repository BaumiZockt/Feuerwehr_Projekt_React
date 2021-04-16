import Image from "next/image"

const Nav = () => {
    return (        
        <div>

                        <nav className="flex justify-between p-4 bg-red-600">
                            <a href="/"><div className="flex item-center">
                                    <Image className="justify-center" src="/Logo.png" height={30} width={30} alt="Logo FF-Laimbach am Ostrong"/>
                                    <span className="ml-2">Feuerwehr Laimbach</span>

                                </div>
                            </a>

                    <div>
                        <ul className="flex space-x-2">
                            <NavItem href="/mannschaft" text ="Mannschaft"/>
                            <NavItem href="/fuhrpark" text ="Fuhrpark"/>
                            <a href="/login"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 text-white hover:fill-current transition duration-300"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            </a>
                        </ul>
                    </div>
                </nav>
        </div>
    )
}
//dies ist ein test kommentar
export default Nav
export const NavItem = props =>(
    <li>
        <a href={props.href}
            className="text-sm font-bold text-white px-2 py-1 hover:text-gray-300 rounded transition-color duration-300">
            {props.text}
        </a>
    </li>
    );
    
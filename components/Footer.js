const Footer = () => {
    return (
        <footer>
            <div className="bg-gray-700 h-16 w-full">
                <ul>
            <FootItem href="/Impressum" text ="Impressum"/>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
export const FootItem = props =>(
    <li>
        <a href={props.href}
            className="text-sm font-bold text-white px-2 py-1 hover:text-gray-300 rounded transition-colors duration-300">
            {props.text}
        </a>
    </li>
);
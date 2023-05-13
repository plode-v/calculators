import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-500 w-full flex h-[60px] text-white items-center px-5 justify-between">
            <Link to="/" >
                <h1 className="font-[700]">Calculators</h1>
            </Link>
            <ul className="flex gap-3">
                <Link to="tip-calculator">
                    <li>Tip Calculator</li>
                </Link>
                <Link to="calories-calculator">
                    <li>Calories Calculator</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
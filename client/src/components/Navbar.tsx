import { Link } from "react-router-dom";
import { AnimatedNav } from ".";

const Navbar = () => {
    return (
        <AnimatedNav>
            <nav className="bg-[#323643] w-full flex h-[70px] text-[#F7F7F7] items-center px-5 justify-between">
                <Link to="/" >
                    <h1 className="font-[700] text-[24px]">Calculators</h1>
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
        </AnimatedNav>
    )
}

export default Navbar
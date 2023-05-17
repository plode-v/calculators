import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {

    const variants = {
        initial: {
            opacity: 0,
            y: "-100vh"
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2
            }
        }
    }

    return (
            <motion.nav variants={variants} className="z-20 bg-[#323643] w-full flex h-[70px] text-[#F7F7F7] items-center px-5 justify-between">
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
            </motion.nav>
    )
}

export default Navbar
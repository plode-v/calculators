import { motionContainer, motionItem } from "../constants"
import { motion } from "framer-motion"


const Home = () => {

    return (
        <motion.div variants={motionContainer} initial="hidden" animate="show">
            <motion.div variants={motionItem} className="flex justify-center mt-[10%]">
                <div className="flex flex-wrap gap-10 justify-center text-white">
                    <div>
                        <h1 className="text-[24px]">Financial Calculators</h1>
                        <ul>
                            <li>Tip Calculator</li>
                            <li>Loan Calculator</li>
                        </ul>
                    </div>
                    <div>
                        <h1>
                            Fitness Calculators
                        </h1>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Home
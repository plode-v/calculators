import { motion } from "framer-motion"

const AnimatedDiv = ({ children, divStyle, animate, transition, initial }: any) => {
    return (
        <motion.div
            className={divStyle}
            initial={initial}
            animate={animate}
            transition={transition}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedDiv
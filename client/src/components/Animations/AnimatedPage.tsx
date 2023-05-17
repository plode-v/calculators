import { motion } from "framer-motion";

const variants = {
	initial: { 
		opacity: 0,
		y: -50,
		transition: {
			y: {
				stiffness: 1000,
				velocity: -100
			}
		}
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			y: {
				stiffness: 1000
			}
		}
	}

}

const AnimatedPage = ({ children }: any) => {
	return (
		<motion.div
		variants={variants}
		initial={variants.initial}
		animate={variants.animate}
		>
			{children}
		</motion.div>
	)
}

export default AnimatedPage
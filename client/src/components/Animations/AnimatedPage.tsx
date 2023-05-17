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

{/* <div className="flex flex-1 mb-3">
	<label htmlFor="activity" className="pr-5">Activity Level:</label>
	<select name="activity" id="activity" className="px-2 text-black rounded-md focus:outline-none" value={activity} onChange={handleActivity}>
		<option value="1.2">Sedentary</option>
		<option value="1.375">Light Active</option>
		<option value="1.55">Moderately Active</option>
		<option value="1.725">Active</option>
		<option value="1.9">Very Active</option>
	</select>
</div> */}
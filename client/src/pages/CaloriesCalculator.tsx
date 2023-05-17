import { useState } from "react"
import {  CaloriesResult, ObjectRenderer } from "../components";
import { activityLevels, workoutLevels } from "../constants";
import { motion } from "framer-motion";

const CaloriesCalculator = () => {

    const [gender, setGender] = useState<string>("male");
    const [weight, setWeight] = useState<number | null>(null);
    const [height, setHeight] = useState<number | null>(null);
    const [age, setAge] = useState<number | null>(null)
    const [activity, setActivity] = useState<number>(1.2);
    const [calculate, setCalculate] = useState(false);
    const [bmr, setBmr] = useState<number | null>(null);
    const [calories, setCalories] = useState<number | null>(null);

    const caloriesDivStyle="flex justify-between text-[20px] flex-row px-3"
    const caloriesH2Style="pr-2 flex-1 p-2 font-[500]"
    const caloriesPStyle="text-right flex-1 p-2"

    const handleWeight = (e: any) => {
        setWeight(parseFloat(e.target.value));   
    }

    const handleGender = (e: any) => {
        setGender(e.target.value);
    }

    const handleHeight = (e: any) => {
        const parsedHeight = parseFloat(e.target.value);
        setHeight(parsedHeight);
    }

    const handleAge = (e: any) => {
        const parsedAge = parseFloat(e.target.value);
        setAge(parsedAge);
    }

    const handleActivity = (e: any) => {
        const parsedActivity = parseFloat(e.target.value);
        setActivity(parsedActivity);
    }

    const handleChange = async (e: any) => {
        e.preventDefault();

        let basal: number;
        let yourCal: number;
        
        if (weight !== null && height !== null && age !== null) {
            if (gender === "male") {
                basal = (Math.round((weight * 10) + (6.25 * height) - (5 * age) + 5));
            } else {
                basal = (Math.round((weight * 10) + (6.26 * height) - (5 * age ) - 16));
            }
        }


        if (activity === 1.375) {
            yourCal  = basal * 1.375; 
        }
        else if (activity === 1.55) {
            yourCal = basal * 1.55;
        }
        else if (activity === 1.725) {
            yourCal = basal * 1.725;
        }
        else if (activity === 1.9) {
            yourCal = basal * 1.9;
        } else {
            yourCal = basal * 1.2;
        }


        setBmr(Number(basal));
        setCalories(Math.round(Number(yourCal)));

        setCalculate(true)
        
    }

    const container = {
        hidden: { opacity: 0, y: -100 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, staggerChildren: 0.1, delayChildren: 0.1 }}
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
        >
            <motion.div
                variants={item}
                className="flex items-center flex-wrap justify-center text-white lg:flex-row flex-col"
            >
                <motion.div variants={item} className={`h-max shadow-gray-100 w-max ${calculate && "lg:mr-10"}`}>
                    <motion.h1 className="flex justify-center py-10 text-[30px] font-[600]">Calories Calculator</motion.h1>
                    <motion.form className="flex justify-center flex-wrap flex-col text-[18px]" onSubmit={handleChange}>
                        <motion.div className="flex-1 flex mb-2">
                            <label htmlFor="gender" className="pr-5 w-[90px]">Gender:</label>
                            <select name="gender" id="gender" value={gender} onChange={handleGender} className="focus:outline-none text-black rounded-md pl-2">
                                <motion.option value="male">Male</motion.option>
                                <motion.option value="female">Female</motion.option>
                            </select>
                        </motion.div>
                        <motion.div className="flex flex-1 mb-3">
                            <label className="pr-5">Weight:</label>
                            <input 
                                placeholder="70 kg" 
                                className="rounded-md text-black pl-2 focus:outline-none"
                                min="0"
                                step="any"
                                type="number"
                                required
                                value={weight}
                                onChange={handleWeight}
                            />
                        </motion.div>
                        <motion.div className="flex flex-1 mb-3">
                            <label className="pr-5">Height:</label>
                            <input 
                                placeholder="180 cm" 
                                className="rounded-md text-black pl-2 focus:outline-none"
                                min="0"
                                step="any"
                                type="number"
                                required
                                value={height}
                                onChange={handleHeight}
                            />
                        </motion.div>
                        <motion.div className="flex flex-1 mb-3">
                            <label className="pr-5">Age:</label>
                            <input 
                                placeholder="25" 
                                className="rounded-md text-black pl-2 focus:outline-none"
                                min="1"
                                step="any"
                                type="number"
                                required
                                value={age}
                                onChange={handleAge}
                            />
                        </motion.div>
                        <motion.div className="flex flex-1 mb-3">
                            <label htmlFor="activity" className="pr-5">Activity Level:</label>
                            <select id="activity" className="px-2 text-black rounded-md focus:outline-none" name="activity" value={activity} onChange={handleActivity}>
                                <option value="1.2">Sedentary</option>
                                <option value="1.375">Light Active</option>
                                <option value="1.55">Moderately Active</option>
                                <option value="1.725">Active</option>
                                <option value="1.9">Very Active</option>
                            </select>
                        </motion.div>
                        <motion.button 
                            whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                            whileTap={{ scale: 0.9 }}
                            className="bg-blue-500 rounded-lg my-10 duration-100" type="submit">
                            <h4 className="px-5 py-2 text-[20px] font-[500] text-white">Calculate</h4>
                        </motion.button>
                    </motion.form>
                </motion.div>
                {calculate && (
                    <motion.div className="lg:w-1/4 3xl:w-1/6 w-[90%] text-white h-max py-5 bg-[#323643] rounded-lg lg:mt-5"
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            show: {
                                opacity: 1, x: 0, transition: { duration: 0.3 }
                            }
                        }}
                    >
                        <h1 className="text-[24px] font-[600] flex justify-center pb-8">Your Calories</h1>
                        <CaloriesResult 
                            state="Maintain"
                            calories={calories}
                            divStyle={`${caloriesDivStyle} bg-[#606470]`}
                            h2Style={caloriesH2Style}
                            pStyle={caloriesPStyle}
                        />
                        <CaloriesResult 
                            state="Weight Loss"
                            calories={calories - 500}
                            divStyle={`${caloriesDivStyle}`}
                            h2Style={caloriesH2Style}
                            pStyle={caloriesPStyle}
                        />
                        <CaloriesResult 
                            state="Weight gain"
                            calories={calories + 500}
                            divStyle={`${caloriesDivStyle} bg-[#606470]`}
                            h2Style={caloriesH2Style}
                            pStyle={caloriesPStyle}
                        />
                        <CaloriesResult 
                            state="BMR"
                            calories={bmr}
                            divStyle={`${caloriesDivStyle} mt-1`}
                            h2Style={caloriesH2Style}
                            pStyle={caloriesPStyle}
                            />
                    </motion.div>
                )}
                <motion.div variants={item} className="w-full flex flex-wrap items-center justify-center flex-col mt-10">
                    <div className="w-[90%] lg:w-1/4 3xl:w-1/6 border text-white py-5">
                        <h1 className="text-center">Activity Levels</h1>
                        <ObjectRenderer
                            divStyle="flex justify-between px-3 py-1"
                            obj={activityLevels}
                            h4Style="text-[12px]"
                            pStyle="text-[12px]"
                        />
                    </div>
                </motion.div>
                <motion.div className="flex w-[90%] lg:w-1/4 3xl:w-1/6 mt-2" variants={container}>
                    <motion.ul variants={item} className="text-[12px]">
                        {
                            Object.entries(workoutLevels).map(([key, value]) => (
                                <motion.li key={key}>{key} {value}</motion.li>
                            ))
                        }
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default CaloriesCalculator
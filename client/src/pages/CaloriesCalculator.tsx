import { useState } from "react"
import { CustomInput, CaloriesResult } from "../components";

const CaloriesCalculator = () => {

    const [gender, setGender] = useState<string>("male");
    const [weight, setWeight] = useState<number | null>(null);
    const [height, setHeight] = useState<number | null>(null);
    const [age, setAge] = useState<number | null>(null)
    const [activity, setActivity] = useState<number>(1.2);
    const [calculate, setCalculate] = useState(false);
    const [bmr, setBmr] = useState<number | null>(null);
    const [calories, setCalories] = useState<number | null>(null);

    const caloriesDivStyle="flex justify-between text-[20px] flex-row"
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

    return (
        <div className="flex flex-wrap items-center justify-center text-white gap-10">
            <div className="h-max shadow-gray-100 w-max">
                <h1 className="flex justify-center py-10 text-[30px] font-[600]">Calories Calculator</h1>


                <form className="flex justify-center flex-wrap flex-col text-[18px]" onSubmit={handleChange}>
                    <div className="flex-1 flex mb-2">
                        <label htmlFor="gender" className="pr-5">Gender:</label>
                        <select name="gender" id="gender" value={gender} onChange={handleGender} className="focus:outline-none text-black rounded-md pl-2">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <CustomInput 
                        type="number"
                        label="Weight:"
                        placeholder="70 kg"
                        value={weight}
                        onChange={handleWeight}
                        inputStyle="text-black pl-2 rounded-md focus:outline-none"
                        divStyle="flex flex-1 mb-3"
                        labelStyle="pr-5"
                        min="0"
                        step="any"
                    />
                    <CustomInput 
                        type="number"
                        label="Height:"
                        placeholder="180 cm"
                        value={height}
                        onChange={handleHeight}
                        inputStyle="text-black pl-2 rounded-md focus:outline-none"
                        divStyle="flex flex-1 mb-3"
                        labelStyle="pr-5"
                        min="0"
                        step="any"
                    />
                    <CustomInput 
                        type="number"
                        label="Age:"
                        placeholder="25"
                        value={age}
                        onChange={handleAge}
                        inputStyle="pl-2 text-black rounded-md focus:outline-none"
                        divStyle="flex flex-1 mb-3"
                        labelStyle="pr-5"
                        min="0"
                        step="any"
                    />
                    <div className="flex flex-1 mb-3">
                        <label htmlFor="activity" className="pr-5">Activity Level:</label>
                        <select name="activity" id="activity" className="px-2 text-black rounded-md focus:outline-none" value={activity} onChange={handleActivity}>
                            <option value="1.2">Sedentary</option>
                            <option value="1.375">Light Active</option>
                            <option value="1.55">Moderately Active</option>
                            <option value="1.725">Active</option>
                            <option value="1.9">Very Active</option>
                        </select>
                    </div>
                    <button className="bg-blue-500 rounded-lg my-10 hover:scale-105 duration-100" type="submit">
                        <h4 className="px-5 py-2 text-[20px] font-[500] text-white">Calculate</h4>
                    </button>
                </form>
            </div>
            {calculate && (
                <div className="text-white w-1/4 h-max py-5 bg-[#323643] rounded-lg mt-5">
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
                </div>
            )}
        </div>
    )
}

export default CaloriesCalculator
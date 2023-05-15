import { useState } from "react"
import { CustomInput } from "../components";

const CaloriesCalculator = () => {

    // FIX CANNOT ADD DEGITS INTO INPUT

    const [gender, setGender] = useState<string>("male");
    const [weight, setWeight] = useState<number>();
    const [height, setHeight] = useState<number>();
    const [age, setAge] = useState<number>()
    const [activity, setActivity] = useState<number>(1);
    const [calculate, setCalculate] = useState(false);
    const [bmr, setBmr] = useState<number>();

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

    const handleChange = (e: any) => {
        e.preventDefault();
        
        if (gender === "male") {
            setBmr(Math.round((weight * 10) + (6.25 * height) - (5 * age) + 5));
        } else {
            setBmr(Math.round((weight * 10) + (6.26 * height) - (5 * age )- 16));
        }

        setCalculate(true)
        
    }

    return (
        <div className="border border-black h-[90vh] flex items-center justify-center">
            <div className="w-1/2 h-max border rounded-lg shadow-lg shadow-slate-400">
                <h1 className="flex justify-center py-10 text-[24px] font-[600]">Calories Calculator</h1>

                {calculate && (
                    <div>
                        {bmr}
                    </div>
                )}

                <form className="flex items-center justify-center flex-wrap flex-col" onSubmit={handleChange}>
                    <div className="flex-1 flex mb-2">
                        <label htmlFor="gender" className="pr-5">Gender:</label>
                        <select name="gender" id="gender" value={gender} onChange={handleGender}>
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
                        inputStyle="placeholder:p-2"
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
                        inputStyle="placeholder:p-2"
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
                        inputStyle="placeholder:p-2"
                        divStyle="flex flex-1 mb-3"
                        labelStyle="pr-5"
                        min="0"
                        step="any"
                    />
                    <div className="flex flex-1 mb-3">
                        <label htmlFor="activity">Activity Level:</label>
                        <select name="activity" id="activity" className="text-center" value={activity} onChange={handleActivity}>
                            <option value="1">BMR</option>
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
        </div>
    )
}

export default CaloriesCalculator
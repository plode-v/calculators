import { useState } from "react"
import { CustomInput } from "../components"
import { motionContainer, motionItem } from "../constants";
import { motion } from "framer-motion";

const TipCalculator = () => {

    const [bill, setBill] = useState<number>();
    const [tipPercentage, setTipPercentage] = useState<number>();
    const [people, setPeople] = useState<number>(1);

    const handleBillChange = (e: any) => {
        setBill(parseFloat(e.target.value))
    }

    const handleTipChange = (e: any) => {
        setTipPercentage(parseFloat(e.target.value));
    }

    const handleSplit = (e:any) => {
        setPeople(parseFloat(e.target.value));
    }

    const calculateTipAmount = (): string => {
        if (bill === undefined || tipPercentage === undefined) {
            return "N/A";
        }

        const tipAmount = (bill * tipPercentage) / 100;
        const formattedAmount = parseFloat(tipAmount.toFixed(2));
        return isNaN(formattedAmount) ? "" : formattedAmount.toFixed(2);
    }
    
    const calculateTotalAmount = (): string => {
        const totalAmount = bill !== undefined && tipPercentage !== undefined ? bill + parseFloat(calculateTipAmount()) : NaN;
        return isNaN(totalAmount) ? "N/A" : (totalAmount).toFixed(2);
    }

    const calculatePerPerson = (): string => {
        const perPerson = bill !== undefined ? parseFloat(calculateTotalAmount()) / people : NaN;
        return isNaN(perPerson) ? "N/A" : ((perPerson).toFixed(2)).toString();
    }

    return (
        <motion.div
            variants={motionContainer}
            initial="hidden"
            animate="show"
        >
            <motion.div variants={motionItem} className="flex items-center justify-center w-full h-max">
                <div className="md:w-1/2 3xl:w-1/4 w-3/4 justify-center flex flex-col">
                    <div className="flex items-center justify-center py-8">
                        <h1 className="text-[30px] font-[600] text-white">Tip Calculator</h1>
                    </div>
                    <div className="items-center justify-center flex flex-col text-white">
                        <CustomInput 
                            label="Total Bill"
                            type="number"
                            placeholder="100"
                            value={bill}
                            onChange={handleBillChange}
                            divStyle="grid w-max lg:w-1/2 pb-5"
                            labelStyle="font-[500] mb-1"
                            inputStyle="border focus:outline-none text-black rounded-md px-2"
                            min="0"
                        />
                        <CustomInput 
                            label="Tip Percentage"
                            type="number"
                            placeholder="15%"
                            value={tipPercentage}
                            onChange={handleTipChange}
                            divStyle="grid w-max lg:w-1/2 pb-5"
                            labelStyle="font-[500] mb-1"
                            inputStyle="border focus:outline-none text-black rounded-md px-2"
                            min="0"
                        />
                        <CustomInput 
                            label="People"
                            type="number"
                            placeholder="1"
                            value={people}
                            onChange={handleSplit}
                            divStyle="grid w-max lg:w-1/2 pb-5"
                            labelStyle="font-[500] mb-1"
                            inputStyle="border focus:outline-none text-black rounded-md px-2"
                            min="1"
                        />
                    </div>
                    <div className="flex flex-col items-center py-10 text-white">
                        <p className="py-1">Tip Tip: <strong>{calculateTipAmount()}</strong></p>
                        <p className="py-1">Total Amount: <strong>{calculateTotalAmount()}</strong></p>
                        <p className="py-1">Total Per Person: <strong>{calculatePerPerson()}</strong></p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default TipCalculator
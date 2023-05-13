import { useState } from "react"
import { Input } from "../components"

const TipCalculator = () => {

    const [bill, setBill] = useState();
    const [tip, setTip] = useState();

    
    // Fix this function and make it show onto the webpage.
    const turnToNumber = (num) => {

        let number;

        if (num.includes("%")) {
            const cleanedValue = num.replace("%", "");
    
            number = parseFloat(cleanedValue);
        } else {
            number = parseFloat(num);
            setTip(number);
        }

        const result = bill - number;
        return (
            <h1>{!NaN ? result : 0}</h1>
        )

    };

    return (
        <div className="flex items-center justify-center w-full h-[60vh]">
            <div className="sm:w-1/3 w-3/4 justify-center flex flex-col shadow-[10px_10px_20px_-12px_grey] border">
                <div className="flex items-center justify-center pt-8 pb-[70px]">
                    <h1 className="text-[24px] font-[600]">Tip Calculator</h1>
                </div>
                <div className="items-center justify-center flex flex-col">
                    <Input 
                        label="Total Bill"
                        type="number"
                        placeholder="$100"
                        value={bill}
                        onChange={(e) => setBill(e.target.value)}
                        divStyle="grid w-1/2 pb-5"
                        labelStyle="font-[500] mb-1"
                        inputStyle="border"
                    />
                    <Input 
                        label="Tip Percentage"
                        type="number"
                        placeholder="15%"
                        value={tip}
                        onChange={(e) => setTip(e.target.value)}
                        divStyle="grid w-1/2"
                        labelStyle="font-[500] mb-2"
                        inputStyle="border"
                    />
                </div>
                <div>
                    <h1>Pay total</h1>
                    <h1 onChange={turnToNumber}>{turnToNumber}</h1>
                </div>
            </div>
        </div>
    )
}

export default TipCalculator
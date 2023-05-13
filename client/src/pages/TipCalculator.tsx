import { useState } from "react"
import { Input } from "../components"
import { currencies } from "../constants"

const TipCalculator = () => {

    const [bill, setBill] = useState<number | undefined>();
    const [tipPercentage, setTipPercentage] = useState<number | undefined>();
    const [currency, setCurreny] = useState<string>("USD $")
    const [currencyOptions] = useState(Object.keys(currencies).map(key => [key]));

    const handleBillChange = (e: any) => {
        setBill(e.target.value)
    }

    const handleTipChange = (e: any) => {
        setTipPercentage(e.target.value);
    }

    const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurreny(e.target.value);
    }

    const calculateTipAmount = () => {
        const tipAmount = bill && tipPercentage ? (bill * (tipPercentage / 100)).toFixed(2) : "NaN";
        return isNaN(parseFloat(tipAmount)) ? "N/A" : tipAmount;
    }

    // FIX TIP PERCENTAGE
    
    const calculateTotalAmount = (): string => {
        const totalAmount = bill && tipPercentage ? bill + parseFloat(calculateTipAmount()) : NaN;
        return isNaN(totalAmount) ? "N/A" : totalAmount.toFixed(2);
    }

    const getCurrencyValue = (currency: string) => {
        const currencyValues: { [key: string] :string } = currencies;

        return currencyValues[currency] || "";
    }

    return (
        <div className="flex items-center justify-center w-full h-[60vh]">
            <div className="sm:w-1/3 w-3/4 justify-center flex flex-col shadow-[10px_10px_20px_-12px_grey] border">
                <div className="flex items-center justify-center pt-8 pb-[70px]">
                    <h1 className="text-[24px] font-[600]">Tip Calculator</h1>
                </div>
                <div className="items-center justify-center flex flex-col">
                    <div className="grid w-1/2">
                        <label>Currency</label>
                        <select 
                            name="currency" 
                            id="currency"
                            value={currency}
                            onChange={handleCurrencyChange}
                        >
                            {currencyOptions.map(option => (
                                <option value={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    <Input 
                        label="Total Bill"
                        type="number"
                        placeholder={`${getCurrencyValue(currency)}100`}
                        value={bill}
                        onChange={handleBillChange}
                        divStyle="grid w-1/2 pb-5"
                        labelStyle="font-[500] mb-1"
                        inputStyle="border"
                    />
                    <Input 
                        label="Tip Percentage"
                        type="number"
                        placeholder="15%"
                        value={tipPercentage}
                        onChange={handleTipChange}
                        divStyle="grid w-1/2"
                        labelStyle="font-[500] mb-2"
                        inputStyle="border"
                    />
                </div>
                <div>
                    <p>Tip Tip: <strong>{`${getCurrencyValue(currency)} ${calculateTipAmount()}`}</strong></p>
                    <p>Total Amount: <strong>{`${getCurrencyValue(currency)} ${calculateTotalAmount()}`}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default TipCalculator
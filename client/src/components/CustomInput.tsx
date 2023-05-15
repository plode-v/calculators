const CustomInput = ({label, placeholder, value, type, onChange, inputStyle, divStyle, labelStyle, min, step} :any) => {
    return (
        <div className={divStyle}>
            <label className={labelStyle}>{label}</label>
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                className={inputStyle}
                min={min}
                required
                step={step}
            />
        </div>
    )
}

export default CustomInput
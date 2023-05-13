const Input = ({label, placeholder, value, type, onChange, inputStyle, divStyle, labelStyle} :any) => {
    return (
        <div className={divStyle}>
            <label className={labelStyle}>{label}</label>
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                className={inputStyle}
            />
        </div>
    )
}

export default Input
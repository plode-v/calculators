const CaloriesResult = ({ state, calories, divStyle, h2Style, pStyle }: any) => {
    return (
        <div className={divStyle}>
            <h2 className={h2Style}>{state}</h2>
            <p className={pStyle}>{calories} Calories</p>
        </div>
    )
}

export default CaloriesResult
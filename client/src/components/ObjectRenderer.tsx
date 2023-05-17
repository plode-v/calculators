const ObjectRenderer = ({ obj, divStyle, h4Style, pStyle }: any) => {
    return (
        <div>
            {Object.entries(obj).map(([key, value]: any) => (
                <div key={key} className={divStyle}>
                    <h4 className={h4Style}>{key}</h4>
                    <p className={pStyle}>{value}</p>
                </div>
            ))}
        </div>
    )
}

export default ObjectRenderer
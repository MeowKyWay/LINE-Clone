function LabelInput({ value, onChange, placeholder, className, style }: {
    value: string,
    onChange: (value: string) => void,
    placeholder?: string,
    className?: string,
    style?: object,
}) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`bg-transparent ${className}`}
            style={{
                background: "transparent",
                ...style
            }}
        />
    )
}

export default LabelInput;
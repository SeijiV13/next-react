const TextInput = ({disabled, name,  value, label, onChange }) => {

    return (
        <div>
            <label>{label}</label>
            <input 
            name={name}
            className="form-control"
            value={value}
            onChange= {onChange}
            disabled={disabled}
            >
            </input>
        </div>
    )
}

export default TextInput;
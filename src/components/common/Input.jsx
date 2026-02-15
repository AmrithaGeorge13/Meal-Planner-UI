

function Input({label,value,onChange,placeholder,type='text'}){
    return (<div>
        {label && <label></label>}
        <input type={type} value={value} onChange={(e)=>onChange(e.target.value)}
        placeholder={placeholder}/>
    </div>);
}
export default Input
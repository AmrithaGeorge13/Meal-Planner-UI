function Button({label,onClick,disabled,type="button"}){
    return (<button type={type} onClick={onClick} disabled={disabled}>{label}</button>);
}
export default Button;
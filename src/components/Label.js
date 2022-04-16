const Label = (props) => {
    return (
        <label htmlFor={props.for}>{props.valor}</label>
    )
}

export default Label
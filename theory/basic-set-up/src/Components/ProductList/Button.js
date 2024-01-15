
function Button(props){
    return (<>
        <button onClick={props.btnEventHandler}>
            {props.children}
        </button>
    </>);
}
export default Button;
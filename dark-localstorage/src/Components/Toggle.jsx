import "./Toggle.css";

export const Toggle = ({handlerChange, isChecked})=>{

    return (
        <div className="toggle-container">
            <input 
            type="checkbox"
            id="check"
            className="toggle"
            onChange={handlerChange}
            checked={isChecked}
            />
            <label htmlFor="check" >Dark Mode</label>
        </div>
    );

}
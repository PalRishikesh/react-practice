import { useSelector, useDispatch } from "react-redux";
import { changeColor, selectColor, selectColorOpacity,changeOpacity, paintColorAsync, selectColorLoading } from "./canvasSlice";
import logo from '../../logo.svg';

import styles from './Canvas.module.css';

const Color = () => {
  const color = useSelector(selectColor);
  const isColorLoading = useSelector(selectColorLoading);
  const opaCity = useSelector(selectColorOpacity);
  const dispatch = useDispatch();

  return(
    <div className={styles.colors}>
      <h2>Colors {isColorLoading}</h2>
      <div 
        className={styles.circle} 
        style={{backgroundColor: color, opacity:opaCity}}>
          <img src={logo} className="App-logo" alt="logo" style={{width: '100%', height: 'auto'}}/>
      </div>
      <div className="buttons">
        <button 
          className={styles.btn} 
          onClick={(color) => dispatch(changeColor('#FFFFFF'))}>
            White
        </button>
        <button 
          className={styles.btn}
          onClick={(color) => dispatch(changeColor('orange'))}>
            Orange
        </button>
        <button 
          className={styles.btn}
          onClick={(color) => dispatch(changeColor('yellow'))}>
            Yellow
        </button>
        <button 
          className={styles.btn}
          onClick={(color) => dispatch(changeColor('pink'))}>
            Pink
        </button>
        <button 
          className={styles.btn}
          onClick={(color) => dispatch(paintColorAsync())}>
            Random
        </button>
        <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={opaCity}
        onChange={(e)=>dispatch(changeOpacity(e.target.value))}
        />
      </div>
    </div>
  )
};

export default Color;
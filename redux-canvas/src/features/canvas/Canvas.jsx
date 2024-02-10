import React from 'react'
import style from './Canvas.module.css';
import Color from './Color';
import Font from './Font';

const Canvas = () => {
  return (
    <div className={style.canvas}>
        <Color/>
        <Font/>
    </div>
  )
}
export default Canvas
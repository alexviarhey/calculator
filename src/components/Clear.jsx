import React from 'react'
import s from "../App.module.css";
import {connect} from "react-redux";
import {clearDisplay} from "../Redux/display-reducer";


const Clear = ({clearDisplay}) => {
    return (
        <button onClick={clearDisplay} className={s.clear}>Clear</button>
    )
};


export default connect(null, {clearDisplay})(Clear)
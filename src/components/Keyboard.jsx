import React from 'react'
import s from "../App.module.css";
import {connect} from "react-redux";
import {addSymbol, toCount} from "../Redux/display-reducer";

const Keyboard = ({items, addSymbol, toCount}) => {

    const onClick = (i) => {
        i !== '=' ? addSymbol(i) : toCount()
    };
    return (
        <div className={s.keyboard}>
            {items.map(i => (
                <button onClick={() => onClick(i)} key={i}
                        className={!isNaN(i) || i === '.' || i === '=' ? s.item : s.item + ' ' + s.operator}>
                    {i}
                </button>))}
        </div>
    )
};

export default connect(null, {addSymbol, toCount})(Keyboard)
import React from 'react'
import s from "../App.module.css";
import {connect} from "react-redux";
import {getValue} from "../Selectors/selectors";

const Display = ({value}) => {
    return (
        <div>
            <input value={value} className={s.input} />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        value: getValue(state)
    }
};

export default connect(mapStateToProps, null)(Display)
import React from'react'
import s from './App.module.css'
import Display from "./components/Display";
import Keyboard from "./components/Keyboard";
import Clear from "./components/Clear";


const App = () => {
    const items = [7,8,9,'/',4,5,6,'*',1,2,3,'+','.',0,'=','-'];
    return (
        <div className={s.outer}>
            <div className={s.wrapper}>
                <Display />
                <Keyboard items={items}/>
                <Clear />
            </div>
        </div>
    )
};

export default App
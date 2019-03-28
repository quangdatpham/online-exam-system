import React from 'react';

import '../Management.css';

import Manager from '../../../icons/teacher.png';
import History from '../../../icons/history.png';

export default function (props) {
    const { changeTask } = props;
    return (
        <div className="StudentManagement">
            <div className="mana">
                <div className="m" onClick={() => changeTask(0)}>
                    <img  src={Manager} alt="manager" />
                </div>
                <div className="m" onClick={() => changeTask(1)}>
                    <img src={History} alt="History" />
                </div>
            </div>
        </div>
    );
}
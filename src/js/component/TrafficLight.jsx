import React, { useState, useEffect } from 'react';

export const TrafficLight = () => {

    // Estados:
    const [circleColor, setCircleColor] = useState({
        red: 'rounded-circle p-4 m-2 bg-secondary',
        yellow: 'rounded-circle p-4 m-2 bg-secondary',
        green: 'rounded-circle p-4 m-2 bg-secondary',
    });
    const [timerClickStatus, setTimerClickStatus] = useState(false);

    const circleClick = (color) => {
        setCircleColor(() => ({
            red: color === 'red' ? 'rounded-circle p-4 m-2 bg-danger lightOnRed' : 'rounded-circle p-4 m-2 bg-secondary',
            yellow: color === 'yellow' ? 'rounded-circle p-4 m-2 bg-warning lightOnYellow' : 'rounded-circle p-4 m-2 bg-secondary',
            green: color === 'green' ? 'rounded-circle p-4 m-2 bg-success lightOnGreen' : 'rounded-circle p-4 m-2 bg-secondary',
        }));
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-auto bg-dark text-white rounded-4 d-flex flex-column align-items-center p-3">
                    <div className={circleColor.red} onClick={() => circleClick('red')}></div>
                    <div className={circleColor.yellow} onClick={() => circleClick('yellow')}></div>
                    <div className={circleColor.green} onClick={() => circleClick('green')}></div>
                </div>
                </div>
            </div>
    );
};
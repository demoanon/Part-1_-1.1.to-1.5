import React from 'react';

const Result = ({ result }) => {
    const totalClicks = result.reduce((sum, item) => sum + item.clicks, 0);

    const buttonClicks = result.reduce((acc, item) => {
        if (item.button === "good") {
            acc.goodClicks += item.clicks;
        } else if (item.button === "bad") {
            acc.badClicks += item.clicks;
        }
        return acc;
    }, { goodClicks: 0, badClicks: 0 });

    const average = (buttonClicks.goodClicks - buttonClicks.badClicks) / totalClicks;
    const good = buttonClicks.goodClicks / totalClicks;


    return (
        <div>
            {result.map((item, index) => (
                <div key={index}>
                    <p>{item.button}: {item.clicks}</p>
                </div>
            ))}
            <p>Total = {totalClicks}</p>
            <p>Average = {average}</p>
            <p>Positive = {good} </p>
        </div>
    );
};

export default Result;

import React from 'react';

const Result = ({ result }) => {
    const totalClicks = result.reduce((sum, item) => sum + item.clicks, 0);

    return (
        <div>
            {result.map((item, index) => (
                <div key={index}>
                    <p>{item.button}: {item.clicks}</p>
                </div>
            ))}
        </div>
    );
};

export default Result;

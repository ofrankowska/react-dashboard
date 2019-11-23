import React from 'react';

const Clock = ({ hour, min }) => {
    const addZero = (n) => (parseInt(n, 10) < 10 ? '0' : '') + n;
    return (
        <time>
            {addZero(hour)}<span>:</span>{addZero(min)}
        </time>
    )
}

export default Clock;
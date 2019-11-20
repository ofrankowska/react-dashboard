import React from 'react';

function Clock(props) {
    const { hour, min } = props;
    function addZero(n) {
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }
    return (
        <time>
            {addZero(hour)}<span>:</span>{addZero(min)}
        </time>
    )
}

export default Clock;
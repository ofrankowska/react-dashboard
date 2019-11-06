import React from 'react'

function Clock(props) {
    const {hour, min, sec}= props;
    function addZero(n){
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }
    return (
        <time>
            {addZero(hour)}<span>:</span>{addZero(min)}<span>:</span>{addZero(sec)}
        </time>
    )
}

export default Clock;
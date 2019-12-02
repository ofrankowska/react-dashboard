import React from 'react';
import PropTypes from 'prop-types';

const Clock = ({ hour, min }) => {
  const addZero = n => (parseInt(n, 10) < 10 ? '0' : '') + n;
  return (
    <time>
      {addZero(hour)}
      <span>:</span>
      {addZero(min)}
    </time>
  );
};

Clock.propTypes = {
  hour: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
};
export default Clock;

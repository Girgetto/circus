import React from 'react';
import PropTypes from 'prop-types';

const Descriptions = ({
  text, index, changer, ctx,
}) => (
  <ul>
    {text.fifth.map((x, i) => (
      <div
        key={x.title}
        tabIndex="0"
        role="button"
        onClick={() => changer(i)}
        onKeyDown={ctx.handleKeyDown}
      >
        <svg height="50" width="50">
          <circle
            cx="10"
            cy="10"
            r="8"
            stroke={`${text.fifth[i].color}`}
            strokeWidth="3"
            fill={`${index === i ? text.fifth[i].color : 'white'}`}
          />
        </svg>
      </div>
    ))}
  </ul>
);

Descriptions.defaultProps = {
  text: 'Loading',
  index: 0,
  changer: '',
  ctx: '',
};

Descriptions.propTypes = {
  text: PropTypes.shape({
    first: PropTypes.string,
  }),
  index: PropTypes.number,
  changer: PropTypes.func,
  ctx: PropTypes.shape({}),
};

export default Descriptions;

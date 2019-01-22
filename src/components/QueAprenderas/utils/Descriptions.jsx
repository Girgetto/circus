import React from 'react';
import PropTypes from 'prop-types';
import { Ul } from '../style';

const Descriptions = ({
  text, index, changer, ctx,
}) => (
  <Ul>
    {text.fifth.map((x, i) => (
      <div
        key={x.title}
        tabIndex="0"
        role="button"
        onClick={() => changer(i)}
        onKeyDown={ctx.handleKeyDown}
        style={{ cursor: 'pointer' }}
      >
        <svg width="60" height="60">
          <circle
            cx="50%"
            cy="50%"
            r="8"
            stroke={`${text.fifth[i].color}`}
            strokeWidth="3"
            fill={`${index === i ? text.fifth[i].color : 'white'}`}
          />
        </svg>
      </div>
    ))}
  </Ul>
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

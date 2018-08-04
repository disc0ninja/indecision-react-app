import React from 'react';

const Action = (props) => {
  return (
      <div>
          <button onClick={props.handlePick}
              disabled={!props.hasOptions}>
              Are You Feeling Lucky Punk?
          </button>
      </div>
  );
};

export default Action

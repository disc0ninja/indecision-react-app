import React from 'react';

const Action = (props) => (
    <div>
        <button className='big-button' onClick={props.handlePick}
            disabled={!props.hasOptions}>
            Are You Feeling Lucky Punk?
        </button>
    </div>
);

export default Action

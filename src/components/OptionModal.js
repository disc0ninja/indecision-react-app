import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
    >
      <h3>I have Chosen:</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.handleCloseModal}>Close</button>
    </Modal>

  );

export default OptionModal
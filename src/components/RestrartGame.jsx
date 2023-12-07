// RestartButton.js
import { MdOutlineRestartAlt } from 'react-icons/md';

import React from 'react';

const RestartButton = ({ onClick }) => (
  <div className="centeredContainer">
    <button className="restartButton" onClick={onClick}>
      <MdOutlineRestartAlt className="restartIcon" />
    </button>
  </div>
);

export default RestartButton;

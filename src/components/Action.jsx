import React from "react";

const Action = props => {
  return (
    <div>
      <button
        className="big-button"
        onClick={props.handleAction}
        disabled={props.isThereOptions}
      >
        Decide For Me
      </button>
    </div>
  );
};

export default Action;

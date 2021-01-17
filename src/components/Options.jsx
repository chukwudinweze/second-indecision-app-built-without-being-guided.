import React from "react";
import Option from "./Option";

const Options = props => {
  return (
    <div>
      <div className="widget-header">
        <h3> Options</h3>
        <button onClick={props.handleRemoveAll} className="button button--link">
          Remove All
        </button>
      </div>
      {props.options.length === 0 && <p className='widget-message'>Add Option to get started</p>}
      {props.options.map((option, index) => {
        return (
          <Option
            key={index}
            optionText={option}
            handleRemoveOption={props.handleRemoveOption}
            count={index + 1}
          />
        );
      })}
    </div>
  );
};

export default Options;

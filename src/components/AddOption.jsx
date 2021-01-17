import React from "react";

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOptiont = this.handleAddOptiont.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOptiont(e) {
    e.preventDefault();
    let option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => {
      return {
        error
      };
    });

    if (!error) {
      e.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <form onSubmit={this.handleAddOptiont}>
        {this.state.error && (
          <p className="widget-message">{this.state.error}</p>
        )}
        <div className="add-option">
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </div>
      </form>
    );
  }
}

export default AddOption;

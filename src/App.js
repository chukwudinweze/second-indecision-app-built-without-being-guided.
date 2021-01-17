import React from "react";
import Header from "./components/Header";
import Action from "./components/Action";
import Options from "./components/Options";
import AddOption from "./components/AddOption";
import OptionModal from "./components/OptionModal";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      option: props.option,
      selectedOption: undefined
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("option");
      const option = JSON.parse(json);
      if (option) {
        this.setState(() => ({ option }));
      }
    } catch (e) {
      //do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.option.length !== this.state.option.length) {
      const json = JSON.stringify(this.state.option);
      localStorage.setItem("option", json);
    }
  }

  handleAction = () => {
    const randomNumber = Math.floor(Math.random() * this.state.option.length);
    const option = this.state.option[randomNumber];
    this.setState(() => {
      return {
        selectedOption: option
      };
    });
  };

  handleCloseModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };
  handleRemoveAll = () => {
    this.setState(() => {
      return {
        option: []
      };
    });
  };

  handleRemoveOption = optionToDelete => {
    this.setState(prevState => {
      return {
        option: prevState.option.filter(prevOption => {
          return prevOption !== optionToDelete;
        })
      };
    });
  };

  handleAddOption = option => {
    if (!option) {
      return <p>Input shouldn't be empty</p>;
    } else if (this.state.option.indexOf(option) > -1) {
      return <p>option already exists</p>;
    }
    this.setState(prevState => {
      return {
        option: [...prevState.option, option]
      };
    });
  };
  render() {
    const title = "Indecision App";
    const subtitle = "Put your life in the Hands of a Computer";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            handleAction={this.handleAction}
            isThereOptions={this.state.option.length === 0}
          />
          <div className="widget">
            <Options
              handleRemoveAll={this.handleRemoveAll}
              options={this.state.option}
              handleRemoveOption={this.handleRemoveOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleCloseModal={this.handleCloseModal}
          />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  option: []
};

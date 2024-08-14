import React from "react";

class Input extends React.Component {
  render() {
    const { onChangeLocation } = this.props;
    return (
      <div>
        <input
          type="text"
          placeholder="Enter city"
          value={this.props.location}
          onChange={onChangeLocation}
        />
      </div>
    );
  }
}

export default Input;

import React from "react";

const cellStyle = {
  display: "block",
  backgroundColor: "white",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

const cellStyle2 = {
  display: "block",
  backgroundColor: "blue",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

class Cell extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {style : cellStyle};
  }

  onMouseOver()
  {
    this.setState({style : cellStyle2});
  }

  onMouseOut()
  {
    this.setState({style : cellStyle});
  }

  render()
  {
    return (
      <div style={this.state.style}
        onClick={() => this.props.onClickCell()}
        onMouseOver={() => this.onMouseOver()}
        onMouseOut={() => this.onMouseOut()}>
      {this.props.val}</div>
    )
  }
}

export default Cell;

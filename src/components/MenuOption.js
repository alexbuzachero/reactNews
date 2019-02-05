import React from "react";

// const MenuOption = props => {
export class MenuOption extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      // <button onClick={() => this.props.changeSearch}>
      // <button onClick={this.props.updateSearchCanada} name="search">
      //   {this.props.title}
      // </button>
      <form onSubmit={this.props.getNews}>
        {/* <div className="ui action input"> */}
        <input
          type="text"
          name="search"
          value={this.props.title}
          className="hidden"
        />
        <button className="ui button menuButton" type="submit">
          {this.props.title}
        </button>
        {/* </div> */}
      </form>
    );
  }
}

export default MenuOption;

import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="border border-black mb-4 p-2">
        <h2>Name : {this.props.name}</h2>
        <h3>Location : Noida</h3>
        <h3>Contact : @sidhantrajput1</h3>
      </div>
    );
  }
}

export default UserClass;

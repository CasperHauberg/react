import React from "react";

function Formgroup(props) {
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input className="form-control" type="text" />
    </div>
  );
}

export default Formgroup;

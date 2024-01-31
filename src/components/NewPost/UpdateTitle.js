import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import { updatePostTitle } from "../../redux/actions";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

function UpdateTitle(props) {
  const [typedValue, setTypedValue] = useState("");

  const handleChangeEvent = (event) => {
    setTypedValue(event.target.value);
    console.log(event.target.value);
  };

  const updatePost = () => {
    props.updatePostTitle(typedValue);
  };

  return (
    <div className="update-title">
      <div>Update Title</div>
      <div>
        <input
          value={typedValue}
          onChange={handleChangeEvent}></input>
      </div>
      <div>
        <Button variant="primary" onClick={updatePost}>Update</Button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePostTitle: (title) => dispatch(updatePostTitle(title)),
  };
};

export default connect(null, mapDispatchToProps)(UpdateTitle);

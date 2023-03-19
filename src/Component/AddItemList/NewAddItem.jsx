import React, { useState } from "react";
import AddItmeList from "./AddItmeList";

import "./NewAddItem.css";

const NewAddItem = (props) => {
  const [isClickedView, setIsClickedView] = useState(false);

  const buttonHandler = (e) => {
    setIsClickedView(true);
  };

  if (isClickedView === false) {
    return (
      <div className="add-list-box">
        <button onClick={buttonHandler}>Click! Add New To do List Item</button>
      </div>
    );
  }
  return (
    <AddItmeList
      contentsViewHandler={setIsClickedView}
      listItemHandler={props.listItemHandler}
    ></AddItmeList>
  );
};
export default NewAddItem;

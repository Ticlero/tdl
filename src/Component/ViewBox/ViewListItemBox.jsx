import React, { useState } from "react";
import "./ViewListItemBox.css";
const ViewListItemBox = (props) => {
  const title = props.item.input;
  const [isComplete, setIsComplete] = useState(props.item.isComplete);
  let textDeco = isComplete === true ? "line-through" : "none";

  const completeBtnHandler = (e) => {
    let allList = props.allList;
    if (isComplete === true) {
      allList[props.index]["isComplete"] = false;
      props.setToDoList(allList);
      setIsComplete(false);
      textDeco = "none";
    } else {
      allList[props.index]["isComplete"] = true;
      props.setToDoList(allList);
      setIsComplete(true);
      textDeco = "line-through";
    }
    props.saveListItem(allList);
  };

  const deleteBtnHandler = (e) => {
    const itemLoc = props.index;
    const slicedItems = props.allList.filter((ele, idx) => {
      return idx !== itemLoc;
    });
    console.log(slicedItems);
    props.saveListItem(slicedItems);
    // console.dir(e);
  };

  // isComplete === true ? setTextDeco("line-through") : setTextDeco("none");
  // console.log(isComplete);
  // setTextDeco("line-through");
  return (
    <li>
      <div>
        <label style={{ textDecoration: textDeco }}>{title}</label>
        <div>
          <button onClick={completeBtnHandler}>Complete</button>
          <button onClick={deleteBtnHandler}>delete</button>
        </div>
      </div>
    </li>
  );
};
export default ViewListItemBox;

import React from "react";
import { v4 } from "uuid";
import ViewListItemBox from "./ViewListItemBox";
const ViewBox = (props) => {
  const items = props.listItems;
  return (
    <ul>
      {items.map((item, index, array) => {
        return (
          <ViewListItemBox
            key={v4()}
            item={item}
            index={index}
            setToDoList={props.setListItems}
            saveListItem={props.saveListItem}
            allList={array}
          ></ViewListItemBox>
        );
      })}
    </ul>
  );
};
export default ViewBox;

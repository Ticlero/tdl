import React, { useState } from "react";
import Card from "./Component/UI/Card";
import NewAddItem from "./Component/AddItemList/NewAddItem";
import ViewBox from "./Component/ViewBox/ViewBox";
const App = (props) => {
  const [toDoList, setToDoList] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );

  const listItemHandler = (item) => {
    const inputItems = [...toDoList, item];
    setToDoList((prevState) => {
      console.log(...prevState);
      return [...prevState, item];
    });
    localStorage.setItem("todo", JSON.stringify(inputItems));
  };

  const saveListItem = (items) => {
    setToDoList(items);
    localStorage.setItem("todo", JSON.stringify(items));
  };

  console.log("APP.JS", toDoList);

  return (
    <div>
      <Card className="itembox">
        <NewAddItem listItemHandler={listItemHandler}></NewAddItem>
      </Card>
      <Card>
        {toDoList.length === 0 && <p>Not found to do list</p>}
        {toDoList.length > 0 && (
          <ViewBox
            listItems={toDoList}
            setListItems={setToDoList}
            saveListItem={saveListItem}
          ></ViewBox>
        )}
      </Card>
    </div>
  );
};
export default App;

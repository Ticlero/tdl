import React, { useState } from "react";
import "./AddItemList.css";

const AddItmeList = (props) => {
  const [inputText, setInputText] = useState("");
  let inputPlaceholderText = "Input your to do list";
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText !== "" && inputText !== null) {
      const data = {
        input: inputText,
        isComplete: false,
      };
      console.log(data);
      props.listItemHandler(data);
      setInputText("");
    }
  };

  const inputHandler = (event) => {
    setInputText(event.target.value);
  };

  const cancleHandler = (event) => {
    setInputText("");
    props.contentsViewHandler(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="add-list-box">
        <div className="add-list__control">
          <input
            type="text"
            placeholder={inputPlaceholderText}
            value={inputText}
            onChange={inputHandler}
          ></input>
        </div>
        <div className="add-list_control">
          <button type="button" onClick={cancleHandler}>
            Cancle
          </button>
          <button type="submit">Add</button>
        </div>
      </div>
    </form>
  );
};
export default AddItmeList;

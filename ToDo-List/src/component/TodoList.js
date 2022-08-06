import { React } from "react";
import { MdDeleteForever } from 'react-icons/md';
import { BsTrash } from "react-icons/bs";
import './todolist.css';

const ToDoLists = (props) => {
  return (
    <div className="display">
      <span
        style={{ textDecoration: props.data.isPurchased ? "line-through" : "" }}
        className="itemData"
      >
        {props.text}
      </span>

      <button
        className="pBtn"
        onClick={() => {
          props.onUpdate(props.data);
        }}
      >
        Purchased
      </button>

      <button
        className="dBtn"
        onClick={() => {
          props.onSelect(props.data._id);
        }}
      >
        <MdDeleteForever />
      </button>
    </div>
  );
};

export default ToDoLists;

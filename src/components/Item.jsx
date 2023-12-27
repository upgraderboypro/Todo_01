import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function Item({ list, setItems, handleClick, handleDelete }) {
  return (
    <>
      <li key={list.id} style={{display: "flex",flexDirection: "row", alignItems: "baseline"}} className="card">
        <div className="cb-container">
          <input type="checkbox" className="cb-input"
          name="check"
          checked={list.checked}
          onChange={() => handleClick(list.id)} />
          <span className="check"></span>
        </div>
        <p className="item" style={list.checked ? { textDecoration: "line-through" } : null}>{list.item}</p>
        <button className="clear" onClick={() => handleDelete(list.id)}>
          <FaTrashAlt color="red" offset={blur} />
        </button>
      </li>
    </>
  );
}

export default Item;

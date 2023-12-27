import React from "react";
import Item from "./Item";

function ItemList({ items, setItems, handleClick, handleDelete }) {
  return (
    <>
      <div className="todos">
        {items.map((list) => {
          return (
            <Item
              key={list.id}
              list={list}
              handleClick={handleClick}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
}

export default ItemList;

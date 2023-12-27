import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import ItemList from "./ItemList";
function Content({ items, setItems, handleClick, handleDelete }) {
  return (
    <>
      {items.length !== 0 ? (
        <ItemList items={items} handleClick={handleClick} handleDelete={handleDelete} />
      ) : (
        <>
          <p className="content" style={{color: "white"}}>Empty List Items :(</p>
        </>
      )}
    </>
  );
}

export default Content;

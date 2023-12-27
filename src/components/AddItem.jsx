import { FaPlus } from "react-icons/fa";
function AddItem({ submitHandler, newItem, setNewItem }) {
  return (
    <>
      <form onSubmit={submitHandler}>
        <div style={{ flexDirection: "row" }} className="card add">
          <div className="cb-container">
            <button id="add-btn">+</button>
          </div>
          <div className="txt-container">
            <input
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              type="text"
              className="txt-input"
              placeholder="Create a new todo..."
              spellCheck="false"
              autoComplete="off"
            />
          </div>
        </div>
      </form>
      {/* <form onSubmit={submitHandler}>
        <label className="label" htmlFor="addItem">Add Item</label>
        <input
          id="addItem"
          autoFocus
          type="text"
          placeholder="Add a new item"
          value={newItem}
          onChange={(e)=>setNewItem(e.target.value)}
        />
        <button type="submit" aria-label="Add Item">
          <FaPlus />
        </button>
      </form> */}
    </>
  );
}

export default AddItem;

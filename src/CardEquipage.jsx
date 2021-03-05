import axios from "axios";
import { useState } from "react";
import { List, ListInlineItem } from "reactstrap";

const CardEquipage = ({ name, Id }) => {
  const [id, setId] = useState("");

  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/API/v1/equipage/${Id}`);
  };

  return (
    <List type="inline" style={{ border: " 1px solidblack" }}>
      <ListInlineItem>{name}</ListInlineItem>
      <div>numéro : {Id}</div>

      <form onSubmit={handleDelete}>
        <label>
          member equipage ID:
          <input
            type="text"
            name="id"
            onChange={(e) => {
              setId(e.target.value);
            }}
            value={id}
          />
        </label>
        <button type="submit">Delete</button>
      </form>
    </List>
  );
};

export default CardEquipage;

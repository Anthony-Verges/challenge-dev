import axios from "axios";
import "./CardEquipage.css";

import { List, ListInlineItem } from "reactstrap";

const CardEquipage = ({ name, Id }) => {
  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/API/v1/equipage/${Id}`);
  };

  return (
    <List type="inline" className="list">
      <ListInlineItem>{name}</ListInlineItem>
      <button className="button-delete" type="submit" onClick={handleDelete}>
        Supprimer
      </button>
    </List>
  );
};

export default CardEquipage;

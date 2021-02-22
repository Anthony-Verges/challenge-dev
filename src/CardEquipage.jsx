import { List, ListInlineItem } from "reactstrap";

const CardEquipage = ({ name }) => {
  return (
    <List type="inline">
      <ListInlineItem>{name}</ListInlineItem>
    </List>
  );
};

export default CardEquipage;

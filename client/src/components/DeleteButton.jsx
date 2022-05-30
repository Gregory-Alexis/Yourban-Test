import { Button } from "@chakra-ui/react";
import axios from "axios";

const DeleteButton = ({ id, fetchData }) => {
  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:8080/data/${id}`);
    fetchData();
  };

  return (
    <Button
      type="button"
      aria-label="delete"
      colorScheme="teal"
      borderBottom="2px solid black"
      mr={2}
      size="sm"
      onClick={() => deleteHandler(id)}
    >
      Suprrimer
    </Button>
  );
};

export default DeleteButton;

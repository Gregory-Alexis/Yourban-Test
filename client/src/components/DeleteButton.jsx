import { Button } from "@chakra-ui/react";
import axios from "axios";

const DeleteButton = ({ id, fetchData }) => {
  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:8080/data/${id}`);
    fetchData();
  };

  return (
    <Button
      colorScheme="teal"
      mr={2}
      size="sm"
      borderBottom="2px solid black"
      onClick={() => deleteHandler(id)}
    >
      Suprrimer
    </Button>
  );
};

export default DeleteButton;

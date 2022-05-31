import { Button, Center } from "@chakra-ui/react";
import axios from "axios";

const DeleteButton = ({ id, fetchData }) => {
  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:8080/data/${id}`);
    fetchData();
  };

  return (
    <Center>
      <Button
        type="button"
        aria-label="delete"
        colorScheme="blue"
        borderBottom="2px solid black"
        size="sm"
        onClick={() => deleteHandler(id)}
      >
        Suprrimer
      </Button>
    </Center>
  );
};

export default DeleteButton;

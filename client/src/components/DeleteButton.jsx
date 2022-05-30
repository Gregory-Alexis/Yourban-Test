import { Box, Button } from "@chakra-ui/react";
import axios from "axios";

const DeleteButton = ({ id }) => {
  const deleteHandler = async (id) => {
    await axios.delete(`http://localhost:8080/data/${id}`);
  };

  return (
    <Box>
      <Button
        colorScheme="teal"
        size="md"
        mr="2"
        onClick={() => deleteHandler(id)}
      >
        Suprrimer
      </Button>
    </Box>
  );
};

export default DeleteButton;

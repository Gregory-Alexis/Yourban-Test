import axios from "axios";
import { useEffect, useState } from "react";

import Tableau from "./components/Tableau";

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:8080/data");
    setData(result.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Tableau data={data} fetchData={fetchData} />
    </div>
  );
};

export default App;

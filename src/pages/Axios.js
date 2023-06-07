import React, { useEffect, useState } from "react";
import axios from "axios";

function Axios() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:8000/blogs").then((resp) => {
      setData(resp.data.message);
    });
  }, []);
  return (
    <div>
      <h1>dgfhftghrt {data.title}</h1>
    </div>
  );
}

export default Axios;

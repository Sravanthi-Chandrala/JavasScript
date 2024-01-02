import React, { useState, useEffect } from "react";
import axios from "axios";

function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/todos";

    axios.get(url)
      .then(function(response){
        console.log(response.data)
        setData(response.data);

      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (

    <table border={2}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.completed ? "Yes" : "No"}</td>
          </tr>
        ))}
      </tbody>
    </table>
    
  );
}

export default MyComponent;


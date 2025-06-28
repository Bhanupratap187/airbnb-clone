import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("/api/test")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => setMessage("Error fetching data: " + error.message));
  }, []);

  return (
    <div>
      <h1>Airbnb Clone</h1>
      <p>Message from backend: {message}</p>
    </div>
  );
}

export default App;

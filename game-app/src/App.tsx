import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const displayAlert = () => {
    setAlertVisible(false);
  };
  return (
    <div>
      {alertVisible && <Alert onClose={displayAlert} />}
      <Button onClick={() => setAlertVisible(true)} />
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useSelector } from "react-redux";
import Form from "./Component/Form";
import Weather_Card from "./Component/Weather_card";
import ToggleTheme from "./Component/ToggleTheme";


function App() {
  const theme = useSelector((state) => state.theme);
  console.log(theme);
  return (
    <div className={theme ? "App dark" : "App"} >
      <ToggleTheme />
      <Form />
      <Weather_Card />
    </div>
  );
}

export default App;

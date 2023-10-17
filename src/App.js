import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Order from "./components/orders/Order";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Order />
    </div>
  );
}

export default App;

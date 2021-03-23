import "./App.css";
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Product title="Amazon echo" price={19.99} />
    </div>
  );
}

export default App;

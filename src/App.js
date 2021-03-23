import "./App.css";
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Product title="Amazon echo" price={19.99} />
      <Product title="Samsung TV" price={299.99} />

      <Product title="Iphone Apple 12" price={1200} />
    </div>
  );
}

export default App;

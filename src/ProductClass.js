import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      age: 20,
    };
  }
  componentDidMount() {
    console.log("The Product component loaded");
    console.log("The expensive DB connection was made");
  }

  componentWillUnmount() {
    console.log("The expensive DB connection was disconnected");
  }

  render() {
      
    return (
      <div className="product">
        <h2>{this.props.title}</h2>
        <h3>Price: ${this.props.price}</h3>
        <button
          onClick={(e) => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          +
        </button>
        <h4>{this.state.count}</h4>
        <button
          onClick={(e) => {
            this.setState({
              count: this.state.count - 1,
            });
          }}
        >
          -
        </button>
      </div>
    );
  }
}

export default Product;

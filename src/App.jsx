import { useState } from "react";
import "./App.css";
import { Calculator } from "./getFee";
import moment from "moment";

function App() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [newItem, setNewItem] = useState({
    itemType: -1,
    userType: -1,
    price: 100,
    endDate: moment().format("YYYY-MM-DD"),
  });

  const onItemTypeChange = (event) => {
    setNewItem((n) => {
      return {
        ...n,
        itemType: parseInt(event.target.value, 10),
      };
    });
  };

  const onUserTypeChanged = (event) => {
    setNewItem((n) => {
      return {
        ...n,
        userType: parseInt(event.target.value, 10),
      };
    });
  };

  const onNewItemSubmit = (event) => {
    event.preventDefault();

    const calc = new Calculator();
    const fee = calc.getFee(newItem);

    // update total
    setTotal((currentTotal) => currentTotal + fee);
  };

  const onPriceChanged = (event) => {
    setNewItem((n) => {
      return {
        ...n,
        price: Number(event.target.value),
      };
    });
  };

  const onEndDateChanged = (event) => {
    setNewItem((n) => {
      return {
        ...n,
        endDate: event.target.value,
      };
    });
  };

  console.log(newItem);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Solid Fee Calculator</h1>
      </header>
      <div className="App-page">
        <h2>Items</h2>

        <p>Total fees: {total} </p>

        <h3>Register new item</h3>
        <form className="New-item-form" onSubmit={onNewItemSubmit}>
          <div className="form-group">
            <label>You are</label>
            <select
              className="form-control"
              id="itemType"
              defaultValue="-1"
              onChange={onUserTypeChanged}
            >
              <option value="-1">Select</option>
              <option value="0">Person</option>
              <option value="1">Company</option>
            </select>
          </div>

          <div className="form-group">
            <label>Item Type</label>
            <select
              className="form-control"
              id="itemType"
              defaultValue="-1"
              onChange={onItemTypeChange}
            >
              <option value="-1">Select </option>
              <option value="0">Auction</option>
              <option value="1">Buy it now</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="itemType">Price</label>
            <input
              className="form-control"
              type="number"
              value={newItem.price}
              onChange={onPriceChanged}
            />
          </div>

          <div className="form-group">
            <label htmlFor="itemType">End date</label>
            <input
              className="form-control"
              type="text"
              value={newItem.endDate}
              onChange={onEndDateChanged}
            />
          </div>

          <input type="submit" className="btn btn-primary" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;

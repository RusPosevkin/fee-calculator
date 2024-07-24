import { useState } from "react";
import moment from "moment";

import "./App.css";

import { getFee } from "./getFee";
import { ITEM_TYPE, USER_TYPE } from "./config";

function App() {
  const [total, setTotal] = useState(0);
  const [newItem, setNewItem] = useState({
    itemType: -1,
    userType: -1,
    price: 100,
    endDate: moment().format("YYYY-MM-DD"),
  });

  const onItemTypeChanged = (event) => {
    setNewItem((n) => {
      return {
        ...n,
        itemType: event.target.value,
      };
    });
  };

  const onUserTypeChanged = (event) => {
    setNewItem((n) => {
      return {
        ...n,
        userType: event.target.value,
      };
    });
  };

  const onNewItemSubmitted = (event) => {
    event.preventDefault();

    const fee = getFee(newItem);

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
        <form className="New-item-form" onSubmit={onNewItemSubmitted}>
          <div className="form-group">
            <label htmlFor="userType">You are</label>
            <select
              className="form-control"
              id="userType"
              defaultValue="-1"
              onChange={onUserTypeChanged}
            >
              <option value="-1" disabled>
                Select
              </option>
              <option value={USER_TYPE.person}>{USER_TYPE.person}</option>
              <option value={USER_TYPE.company}>{USER_TYPE.company}</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="itemType">Item Type</label>
            <select
              className="form-control"
              id="itemType"
              defaultValue="-1"
              onChange={onItemTypeChanged}
            >
              <option value="-1" disabled>
                Select
              </option>
              <option value={ITEM_TYPE.auction}>{ITEM_TYPE.auction}</option>
              <option value={ITEM_TYPE.buyNow}>{ITEM_TYPE.buyNow}</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              className="form-control"
              id="price"
              type="number"
              value={newItem.price}
              onChange={onPriceChanged}
            />
          </div>

          <div className="form-group">
            <label htmlFor="endDate">End date</label>
            <input
              className="form-control"
              id="endDate"
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

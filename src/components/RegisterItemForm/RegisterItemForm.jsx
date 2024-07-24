import "./RegisterItemForm.css";

import { ITEM_TYPE, USER_TYPE, INVALID_TYPE } from "../../config";

function RegisterItemForm({ newItem, setNewItem, onSubmit }) {
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

  return (
    <>
      <h3>Register new item</h3>

      <form className="Register-item-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="userType">You are</label>
          <select
            className="form-control"
            id="userType"
            onChange={onUserTypeChanged}
            value={newItem.userType}
          >
            <option value={INVALID_TYPE} disabled>
              Select
            </option>
            <option value={USER_TYPE.person}>Person</option>
            <option value={USER_TYPE.company}>Company</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="itemType">Item Type</label>
          <select
            className="form-control"
            id="itemType"
            value={newItem.itemType}
            onChange={onItemTypeChanged}
          >
            <option value={INVALID_TYPE} disabled>
              Select
            </option>
            <option value={ITEM_TYPE.auction}>Auction</option>
            <option value={ITEM_TYPE.buyNow}>Buy it now</option>
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
    </>
  );
}

export default RegisterItemForm;

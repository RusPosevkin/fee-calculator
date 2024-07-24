import { useState } from "react";
import moment from "moment";

import "./App.css";

import type { NewItemType } from "../../common/types";
import { DEFAULT_PRICE, INVALID_TYPE } from "../../config";
import { getFee } from "../../services";
import { TotalFees, ItemsList, RegisterItemForm } from "..";

function App() {
  const DEFAULT_NEW_ITEM_STATE = {
    itemType: INVALID_TYPE,
    userType: INVALID_TYPE,
    price: DEFAULT_PRICE,
    endDate: moment().format("YYYY-MM-DD")
  };
  const [total, setTotal] = useState(0);
  const [newItem, setNewItem] = useState<NewItemType>(DEFAULT_NEW_ITEM_STATE);

  const onNewItemSubmitted = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fee = getFee(newItem);

    // update total
    setTotal((currentTotal) => currentTotal + fee);
    setNewItem(DEFAULT_NEW_ITEM_STATE);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Solid Fee Calculator</h1>
      </header>
      <div className="App-page">
        <ItemsList />

        <TotalFees total={total} />

        <RegisterItemForm
          newItem={newItem}
          setNewItem={setNewItem}
          onSubmit={onNewItemSubmitted}
        />
      </div>
    </div>
  );
}

export default App;

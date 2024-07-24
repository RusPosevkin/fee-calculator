import { useState } from "react";
import moment from "moment";

import type { NewItemType, NewItemTypeWithFee } from "../../common/types";
import { DEFAULT_PRICE, INVALID_TYPE } from "../../config";
import { getFee } from "../../services";
import { TotalFees, ItemsList, RegisterItemForm } from "..";
import { AppHeader, AppTitle, MainContainer } from "./App.styles";

function App() {
  const DEFAULT_NEW_ITEM_STATE = {
    itemType: INVALID_TYPE,
    userType: INVALID_TYPE,
    price: DEFAULT_PRICE,
    endDate: moment().format("YYYY-MM-DD")
  };
  const [items, setItems] = useState<NewItemTypeWithFee[]>([]);
  const [total, setTotal] = useState(0);
  const [newItem, setNewItem] = useState<NewItemType>(DEFAULT_NEW_ITEM_STATE);

  const onNewItemSubmitted = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fee = getFee(newItem);

    // update total
    setTotal((currentTotal) => currentTotal + fee);
    setItems((i: NewItemTypeWithFee[]) => {
      return [...i, { ...newItem, fee }];
    });
    setNewItem(DEFAULT_NEW_ITEM_STATE);
  };

  return (
    <>
      <AppHeader>
        <AppTitle>Welcome to Solid Fee Calculator</AppTitle>
      </AppHeader>
      <MainContainer>
        <RegisterItemForm
          newItem={newItem}
          setNewItem={setNewItem}
          onSubmit={onNewItemSubmitted}
        />
        <section>
          <ItemsList items={items} />

          <TotalFees total={total} />
        </section>
      </MainContainer>
    </>
  );
}

export default App;

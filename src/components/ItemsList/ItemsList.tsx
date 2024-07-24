import moment from "moment";

import type { ItemsListPropsType } from "./ItemsList.types";
import { EmptyList, EndDate, ItemCard, ItemList, LastDayLabel, Price, Title } from "./ItemsList.styles";
import { isToday } from "../../services";
import { ITEM_TYPE } from "../../config";

function ItemsList({ items }: ItemsListPropsType) {
  return (
    <>
      <h2>Items</h2>
      {
        items.length > 0 ? (
          <ItemList>
            {
              items.map((item, index) => (
                <ItemCard key={index}>
                  <Title>{item.userType} → {item.itemType === ITEM_TYPE.buyNow ? 'But it now' : 'Auction'}</Title>
                  <Price>
                    💰 {item.price} → {item.fee} (including fees)
                  </Price>
                  <EndDate>
                    📆 {moment(item.endDate).format('ll')}
                  </EndDate>
                  {isToday(item.endDate) && (
                    <LastDayLabel>Last day</LastDayLabel>
                  )}
                </ItemCard>
              ))
            }
          </ItemList>
        ) : (
          <EmptyList>
            Start registering items in the form
          </EmptyList>
        )
      }
    </>
  );
}

export default ItemsList;

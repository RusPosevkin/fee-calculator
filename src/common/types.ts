export type NewItemType = {
  itemType: string;
  userType: string;
  price: number,
  endDate: string,
};

export interface NewItemTypeWithFee extends NewItemType {
  fee: number;
}


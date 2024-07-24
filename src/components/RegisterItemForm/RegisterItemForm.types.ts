import { SetStateAction } from "react";

import type { NewItemType } from "../../common/types";

export type RegisterItemFormPropsType = {
  newItem: NewItemType;
  setNewItem: (value: SetStateAction<NewItemType>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

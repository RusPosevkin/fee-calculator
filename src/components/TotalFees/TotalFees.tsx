import { TotalFeesContainer } from "./TotalFees.styles";
import type { TotalFeesPropsType } from "./TotalFees.types";

function TotalFees({ total }: TotalFeesPropsType) {
  return <TotalFeesContainer>Total fees: {total} </TotalFeesContainer>;
}

export default TotalFees;

import type { TotalFeesPropsType } from "./TotalFees.types";

function TotalFees({ total }: TotalFeesPropsType) {
  return <p>Total fees: {total} </p>;
}

export default TotalFees;

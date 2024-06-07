import {BalanceDisplay} from "./BalanceDisplay";
import { signMessage } from "@wagmi/core";

export const UserInterfaceComponent = () => {

  return (
    <div>
      <BalanceDisplay />
    </div>
  );
};

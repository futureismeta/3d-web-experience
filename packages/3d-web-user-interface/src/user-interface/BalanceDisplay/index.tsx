import useUINetworking from "../../hooks/useWebSocket";
import MetisIcon from "../../icons/metis.svg";

import styles from "./BalanceDisplay.module.css";
import {signMessage} from "@wagmi/core";

export const BalanceDisplay = () => {
  const { balance } = useUINetworking();

  return (
    <div className={styles.userInterface}>
      <div className={styles.balanceWrapper}>
          <div onClick={() => async () => {
              await signMessage({
                  account: {type: 'local'},
                  connector: {type: 'injected'},
                  message: 'Hello, world!',
              });

          }}>Sign Message</div>

        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(MetisIcon)}`}
          className={styles.metisIcon}
          onClick={() => {
            console.log("Metis icon clicked");
            alert("Metis icon clicked");
          }}
        />
        <span className={styles.balance}>3.33</span>
        {/*{balance !== null && <span className={styles.balance}>{balance.toFixed(2)}</span>}*/}
      </div>

      <div className={styles.questWrapper}>
        <h3>Quests</h3>
        <p>Deposit at least 3 Metis into Artemis</p>
      </div>
    </div>
  );
};

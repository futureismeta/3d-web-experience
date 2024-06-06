import { useState, useEffect } from "react";

import UINetworkingClient from "../networking/UINetworkingClient";

const useUINetworking = () => {
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    const uiClient = UINetworkingClient.getInstance();
    console.log('updated balance', balance)

    uiClient.setBalanceUpdateCallback((newBalance: number) => {
      console.log('updated balance', newBalance);
      setBalance(newBalance);
    });

    return () => {
      uiClient.setBalanceUpdateCallback(undefined); // Clean up the callback
    };
  }, []);

  return { balance };
};

export default useUINetworking;

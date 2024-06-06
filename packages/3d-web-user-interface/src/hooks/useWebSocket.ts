import { useState, useEffect, useCallback } from "react";

import UINetworkingClient from "../networking/UINetworkingClient";

const useWebSocketService = (url: string) => {
  const [data, setData] = useState<any>(null);
  const webSocketService = UINetworkingClient.getInstance();

  const subscribeToMessageType = useCallback(
    (type: string, callback: (data: any) => void) => {
      webSocketService(type, callback);
    },
    [webSocketService],
  );

  const sendMessage = useCallback(
    (message: any) => {
      webSocketService.sendMessage(message);
    },
    [webSocketService],
  );

  return { data, sendMessage, subscribeToMessageType, setData };
};

export default useWebSocketService;

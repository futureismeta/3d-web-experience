import {ReconnectingWebSocket, WebsocketFactory, WebsocketStatus} from "./ReconnectingWebsocket";
import {BalanceUpdate, FromServerMessage, UI_BALANCE_UPDATE} from "./UINetworkingMessages";

export type UINetworkingClientConfig = {
    url: string;
    sessionToken: string;
    websocketFactory: WebsocketFactory;
    statusUpdateCallback: (status: WebsocketStatus) => void;
};

export class UINetworkingClient extends ReconnectingWebSocket {
    private static instance: UINetworkingClient;
    private balanceUpdateCallback?: (balance: number) => void;

    private constructor(private config: UINetworkingClientConfig) {
        super(config.url, config.websocketFactory, (status: WebsocketStatus) => {
            config.statusUpdateCallback(status);
        });
    }

    public static getInstance(config?: UINetworkingClientConfig): UINetworkingClient {
        if (!UINetworkingClient.instance && config) {
            UINetworkingClient.instance = new UINetworkingClient(config);
        }

        return UINetworkingClient.instance;
    }

    private updateBalance(message: FromServerMessage): void {
        this.send(message);
    }
    public setBalanceUpdateCallback(callback: (balance: number) => void) {
        this.balanceUpdateCallback = callback;
    }

    protected handleIncomingWebsocketMessage(message: MessageEvent) {
        console.log("Received message:", message)
        console.log("Received message:", message)
        if (typeof message.data === "string") {
            const parsed = JSON.parse(message.data) as FromServerMessage;
            switch (parsed.type) {
                case UI_BALANCE_UPDATE:
                    console.log("Received balance update", parsed);
                    const balanceMessage = parsed as BalanceUpdate;

                    if (this.balanceUpdateCallback) {
                        console.log("Calling balance update callback", balanceMessage.balance)
                        this.balanceUpdateCallback(balanceMessage.balance);
                    }
                    break;
                default:
                    console.warn("Unknown message type received", parsed);
            }
        } else {
            console.error("Unhandled message type", message.data);
        }
    }
}

export default UINetworkingClient
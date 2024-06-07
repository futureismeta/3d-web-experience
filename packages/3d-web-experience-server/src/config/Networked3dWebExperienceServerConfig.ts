import { UserAuthenticator } from "../auth/UserAuthenticator";

export type Networked3dWebExperienceServerConfig = {
    networkPath: string;
    webClientServing: {
        indexUrl: string;
        indexContent: string;
        sessionTokenPlaceholder?: string;
        clientBuildDir: string;
        clientUrl: string;
        clientWatchWebsocketPath?: string;
    };
    chatNetworkPath?: string;
    assetServing?: {
        assetsDir: string;
        assetsUrl: string;
    };
    mmlServing?: {
        documentsWatchPath: string;
        documentsUrl: string;
    };
    uiNetworkPath?: string;
    userAuthenticator: UserAuthenticator;
};
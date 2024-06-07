import { UserData, UserIdentity } from "@mml-io/3d-web-user-networking";
import express from "express";

export type UserAuthenticator = {
  generateAuthorizedSessionToken(req: express.Request): Promise<string | null>;
  getClientIdForSessionToken: (sessionToken: string) => {
    id: number;
  } | null;
  onClientConnect(
    clientId: number,
    sessionToken: string,
    userIdentityPresentedOnConnection?: UserIdentity,
  ): Promise<UserData | null> | UserData | null;
  onClientUserIdentityUpdate(clientId: number, userIdentity: UserIdentity): UserData | null;
  onClientDisconnect(clientId: number): void;
};

export const defaultSessionTokenPlaceholder = "SESSION.TOKEN.PLACEHOLDER";

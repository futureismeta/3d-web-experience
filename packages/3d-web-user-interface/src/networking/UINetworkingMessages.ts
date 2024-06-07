export const UI_BALANCE_UPDATE = "ui_balance_update";

export type BalanceUpdate = {
  type: typeof UI_BALANCE_UPDATE;
  balance: number;
};

export type FromServerMessage = BalanceUpdate;
export const COUNTER_ADD = "COUNTER_ADD";
export const COUNTER_DOWN = "COUNTER_DOWN";

export interface ICounterAddAction {
  type: typeof COUNTER_ADD | typeof COUNTER_DOWN;
}

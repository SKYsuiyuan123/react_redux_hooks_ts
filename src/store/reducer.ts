/*
 * @Author: sky
 * @Date: 2019-11-04 23:10:16
 * @email: 13011316073@163.com
 * @Description: file content
 */
import { COUNTER_ADD, COUNTER_DOWN, ICounterAddAction } from "./types";

export default (state = 0, action: ICounterAddAction) => {
  switch (action.type) {
    case COUNTER_ADD:
      return state + 1;

    case COUNTER_DOWN:
      return state - 1;

    default:
      return state;
  }
};

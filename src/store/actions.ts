/*
 * @Author: sky
 * @Date: 2019-11-04 23:11:15
 * @email: 13011316073@163.com
 * @Description: file content
 */
import { COUNTER_ADD, COUNTER_DOWN } from "./types";

export function counterAdd() {
  return {
    type: COUNTER_ADD
  };
}

export function counterDown() {
  return {
    type: COUNTER_DOWN
  };
}

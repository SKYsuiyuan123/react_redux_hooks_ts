/*
 * @Author: sky
 * @Date: 2019-11-04 23:22:14
 * @email: 13011316073@163.com
 * @Description: file content
 */
import { combineReducers, createStore } from "redux";
import counterReducer from "./reducer";

const rootReducer = combineReducers({
  counter: counterReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;

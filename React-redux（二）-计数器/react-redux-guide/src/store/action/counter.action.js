import { DECREMENT, INCREMENT } from "../count/counter.count";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
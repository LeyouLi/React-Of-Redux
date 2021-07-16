import { HIDEMODAL, SHOWMODAL } from "../const/alertModal.const";

export const show = () => ({ type: SHOWMODAL });
export const hide = () => ({ type: HIDEMODAL });
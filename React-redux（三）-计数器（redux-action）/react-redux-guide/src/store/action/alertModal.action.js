import { HIDEMODAL, SHOWMODAL, SHOWMODAL_ASYNC } from "../const/alertModal.const";

export const show = () => ({ type: SHOWMODAL });
export const hide = () => ({ type: HIDEMODAL });

export const show_async = () => ({ type: SHOWMODAL_ASYNC });
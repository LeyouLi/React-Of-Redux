import { HIDEMODAL, SHOWMODAL } from "../const/alertModal.const";

const initialState = {
  show: false,
}

export default function alertModalReducer(state = initialState, action) {
  switch(action.type) {
    case SHOWMODAL: return { ...state, show: true };
    case HIDEMODAL: return { ...state, show: false };
    default: return state;
  }
}
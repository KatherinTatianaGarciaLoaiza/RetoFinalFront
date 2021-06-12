import * as actions from '../actions/okrActions';

export const initialState = {
  disabledButtonOKRForm: true,
  redirect: null,
  OKR: {
    userId: '',
    title: '',
    objective: '',
    responName: '',
    responEmail: '',
    vertical: '',
    description: '',
    krs: [],
  },
  OKRUser: [],
  ProgressOKR: {},
<<<<<<< HEAD
  DataProgressChart: {
    actualPercentage: [0],
  },
=======
  EditOkr: {},
>>>>>>> c6f0ee05c2a866b36578553eb642ef7ebb432a86
};

export default function okrReducer(state = initialState, action) {
  const payload = action.payload;
  switch (action.type) {
    case actions.UPDATE_STATE_OKR:
      return {
        ...state,
        OKR: {
          ...state.OKR,
          ...payload,
        },
      };
    case actions.CREATEKR:
      return {
        ...state,
        OKR: {
          ...state.OKR,
          krs: [...state.OKR.krs, payload],
        },
      };
    case actions.LOGIN:
      return {
        ...state,
        OKR: {
          ...state.OKR,
          userId: payload,
        },
      };
    case actions.UPDATEOKR:
      return {
        ...state,
        redirect: null,
        OKRUser: payload,
      };
    case actions.POSTOKR:
      return {
        ...state,
        OKR: {
          ...state.OKR,
          title: "",
          objective: "",
          responName: "",
          responEmail: "",
          vertical: "",
          description: "",
          krs: [],
        },
<<<<<<< HEAD
=======
        disabledButtonOKRForm: true,
>>>>>>> c6f0ee05c2a866b36578553eb642ef7ebb432a86
      };
    case actions.OKRMAXPROGRESS:
      return {
        ...state,
        ProgressOKR: payload,
      };
<<<<<<< HEAD
    case actions.DATACHARTOKR:
      return {
        ...state,
        DataProgressChart: payload,
      };
=======
    case actions.EDITOKR:
      return {
        ...state,
        ...payload,
      }
>>>>>>> c6f0ee05c2a866b36578553eb642ef7ebb432a86
    case actions.UPDATE_STATUS_BUTTON_OKR:
      return {
        ...state,
        ...payload,
      };
<<<<<<< HEAD
=======
    case actions.CLEAN_REDIRECT:
      return {
        ...state,
        redirect: null
      }
>>>>>>> c6f0ee05c2a866b36578553eb642ef7ebb432a86
    default:
      return state;
  }
}

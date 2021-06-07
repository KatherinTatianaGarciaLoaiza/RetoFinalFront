import * as actions from '../actions/okrActions';

export const initialState = {
  OKR: {
    title: '',
    objective: '',
    respName: '',
    respEmail: '',
    vertical: '',
    description: '',
    KR: [],
  },
};

export default function okrReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CREATEOKR:
      const payload = action.payload;
      return {
        ...state,
        OKR: {
          ...state.OKR,
          title: payload.title,
          objective: payload.objective,
          respName: payload.respName,
          respEmail: payload.respEmail,
          vertical: payload.vertical,
          description: payload.description,
        },
      };
    default:
      return state;
  }
}

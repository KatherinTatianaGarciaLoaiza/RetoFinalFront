import axios from 'axios';
const URI = 'http://localhost:8080';

export const CREATEKR = 'CREATE_KR';
export const LOGIN = 'LOGIN';
export const UPDATE_STATE_OKR = 'UPDATE_STATE_OKR';
export const UPDATEOKR = 'UPDATE_OKR';

export const updateStateOKR = (data) => ({
  type: UPDATE_STATE_OKR,
  payload: data,
});

export const createKR = (data) => ({
  type: CREATEKR,
  payload: data,
});

export const login = (userId) => ({
  type: LOGIN,
  payload: userId,
});

export const update = (data) => ({
  type: UPDATEOKR,
  payload: data,
});

export const postOKR = (data) => {
  return async () => {
     await axios.post(`${URI}/okr`, data);
     alert('Saved');
  };
};

export function getOwnOKR(userId) {
  return async (dispatch) => {
    const { data } = await axios.get(`${URI}/all-okr/${userId}`);
    dispatch(update(data));
  };
}

//TODO -> Hacer el deslogueo
import axios from 'axios';
const URI = 'http://localhost:8080';

export const CREATEOKR = 'CREATE_OKR';
export const CREATEKR = 'CREATE_KR';
export const LOGIN = 'LOGIN';
export const UPDATEOKR = 'UPDATE_OKR';

export const createOKR = (data) => ({
  type: CREATEOKR,
  // payload: { titulo, objetivo, nombre, correo, type, description },
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
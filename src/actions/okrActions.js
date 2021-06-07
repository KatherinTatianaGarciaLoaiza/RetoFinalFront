import axios from 'axios';
const URI = 'http://localhost:8080';

export const CREATEOKR = 'CREATE_OKR';
export const CREATEKR = 'CREATE_KR';
export const LOGIN = 'LOGIN';

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

export const postOKR = (data) => {
  return async () => {
    console.log(data);
    await axios.post(`${URI}/okr`, data);
  };
};
//TODO -> Hacer el deslogueo

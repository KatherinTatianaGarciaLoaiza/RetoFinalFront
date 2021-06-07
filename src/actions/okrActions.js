export const CREATEOKR = 'CREATE_OKR';
export const CREATEKR = 'CREATE_KR';

export const createOKR = (data) => ({
  type: CREATEOKR,
  // payload: { titulo, objetivo, nombre, correo, type, description },
  payload: data,
});

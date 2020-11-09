import { URL_BACKEND } from "../environments/environment";


export const getAlarmas = async () => {
  const response = await fetch(`${URL_BACKEND}/alarmas`);
  const json = await response.json();
  return json;
}
import { URL_BACKEND } from "../environments/environment";


export const getAlarmas = async () => {
  const response = await fetch(`${URL_BACKEND}/ListaAlarmas`);
  const json = await response.json();
  return json;
}

export const deleteAlarmaById=async(id)=>{
  const response = await fetch(`${URL_BACKEND}/ListaAlarmas/${id}`,{
    method:"DELETE",
  });
  const json = await response.json();
  return json;
}
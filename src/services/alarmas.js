import { URL_BACKEND } from "../environments/environment";
// import axios from "axios";

export const getAlarmas = async () => {
  const response = await fetch(`${URL_BACKEND}/api/activealarm`);
  // const response = await fetch(`${URL_BACKEND}/api/alarms`);
  const json = await response.json();
  return json;
};



export const deleteAlarmaById = async (id) => {

  const response = await fetch(`${URL_BACKEND}/api/alarms/${id}`, {
    method: "DELETE",
  });

  //SOLUCIONAR
  //const json = await response.json();

  //return json;
};




export const getVariableById=async(variable)=>{
  const response = await fetch(`${URL_BACKEND}/api/alarms?variable=${variable}`);

  const json =await response.json(); 

  return json;
};

// export const getVariableById = async () => {
//   let response = await axios.get(`${URL_BACKEND}/api/alarms`, {
//     params: {
//       variable: 'curva1'
//     }
//   }
//   );
//   return response;
// };
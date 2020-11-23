import { URL_BACKEND } from "../environments/environment"

export const postRegister = async (objUsuario) => {
  const response = await fetch(`${URL_BACKEND}/registro`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(objUsuario),
  });
  const json =await response.json();
  return json
}
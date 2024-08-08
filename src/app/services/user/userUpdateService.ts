import apiConfig from "../../../config/apiConfig";
import { ResponseInterface } from "../../models/ResponseInterface";
import { UserInterface } from "../../models/UserInterface";

export const userUpdateService = async (
  id: string,
  data: UserInterface,
  token: string = ""
): Promise<ResponseInterface> => {
  try {
    const response = await fetch(`${apiConfig.host}/v1/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    const responseData: ResponseInterface = await response.json();

    return responseData;
  } catch (error) {
    return {
      status: "error",
      message: "Erro na comunicação com o servidor.",
      data: null,
    };
  }
};

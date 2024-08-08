import apiConfig from "../../../config/apiConfig";
import { ResponseInterface } from "../../models/ResponseInterface";

export const userDeleteService = async (
  id: string,
  token: string = ""
): Promise<ResponseInterface> => {
  try {
    const response = await fetch(`${apiConfig.host}/v1/user/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
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

import apiConfig from "../../../config/apiConfig";
import { ResponseInterface } from "../../models/ResponseInterface";

export const userShowService = async (
  id: string,
  token: string = ""
): Promise<ResponseInterface> => {
  try {
    const response = await fetch(`${apiConfig.host}/v1/user/${id}`, {
      method: "GET",
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

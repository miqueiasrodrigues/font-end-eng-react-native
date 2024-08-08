import apiConfig from "../../../config/apiConfig";
import { ResponseInterface } from "../../models/ResponseInterface";
import { UserInterface } from "../../models/UserInterface";

export const userCreateService = async (
  data: UserInterface,
  token: string = ""
): Promise<ResponseInterface> => {
  try {
    const response = await fetch(`${apiConfig.host}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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

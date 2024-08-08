import { userValidation } from "../../utils/validation/userValidation";
import { ResponseInterface } from "../models/ResponseInterface";
import { UserInterface } from "../models/UserInterface";
import { userCreateService } from "../services/user/userCreateService";
import { userDeleteService } from "../services/user/userDeleteService";
import { userShowService } from "../services/user/userShowService";
import { userUpdateService } from "../services/user/userUpdateService";
import { HttpType } from "./../models/types/HttpType";

export const UserHandler = async (
  id: string,
  method: HttpType = "GET",
  data: UserInterface,
  token: string = ""
): Promise<ResponseInterface> => {
  
  if (method === "GET") {
    const responseData = await userShowService(id, token);

    return responseData;
  }

  if (method === "POST") {
    const dataValidation = userValidation(data);

    if (dataValidation.status === "error") {
      return dataValidation;
    }

    const responseData = await userCreateService(dataValidation.data, token);

    return responseData;
  }

  if (method === "PUT") {
    const dataValidation = userValidation(data);

    if (dataValidation.status === "error") {
      return dataValidation;
    }

    const responseData = await userUpdateService(id, dataValidation.data, token);

    return responseData;
  }

  if (method === "DELETE") {
    const responseData = await userDeleteService(id, token);

    return responseData;
  }

  return {
    status: "error",
    message: "O Método não foi mapeado.",
    data: null,
  };
};

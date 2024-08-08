import { loginValidation } from "../../utils/validation/loginValidation";
import { ResponseInterface } from "../models/ResponseInterface";
import { SessionInterface } from "../models/SessionInterface";
import { sessionCreateService } from "../services/session/sessionCreateService";
import { HttpType } from "./../models/types/HttpType";

export const SessionHandler = async (
  data: SessionInterface
): Promise<ResponseInterface> => {
  const dataValidation = loginValidation(data);

  if (dataValidation.status === "error") {
    return dataValidation;
  }

  const responseData = await sessionCreateService(dataValidation.data);

  return responseData;
  
};

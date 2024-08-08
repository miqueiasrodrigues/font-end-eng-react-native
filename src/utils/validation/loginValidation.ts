import { ResponseInterface } from "../../app/models/ResponseInterface";
import { SessionInterface } from "../../app/models/SessionInterface";

export const loginValidation = (
 data: SessionInterface
): ResponseInterface => {
  if (data.email?.trim() === "" || data.password?.trim() === "") {
    return {
      status: "error",
      message: "Preencha os campos obrigatórios.",
      data: null,
    };
  }
  return {
    status: "success",
    message: "Todos os campos foram preenchidos.",
    data: data,
  };
};

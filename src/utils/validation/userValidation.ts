import { ResponseInterface } from "../../app/models/ResponseInterface";
import { UserInterface } from "../../app/models/UserInterface";


export const userValidation = (user: UserInterface): ResponseInterface => {
  if (
    user.name?.trim() === "" ||
    user.email?.trim() === "" ||
    user.password?.trim() === ""
  ) {
    return {
      status: "error",
      message: "Preencha os campos obrigatórios.",
      data: null,
    };
  }
  return {
    status: "success",
    message: "Todos os campos foram preenchidos.",
    data: user,
  };
};

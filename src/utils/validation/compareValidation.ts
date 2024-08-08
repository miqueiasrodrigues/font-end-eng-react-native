import { ResponseInterface } from "../../app/models/ResponseInterface";


export const compareValidation = (dataName: string, data: string, dataConfirm: string): ResponseInterface => {
  if (
   data !== dataConfirm
  ) {
    return {
      status: "error",
      message: `${dataName} está divergente.`,
      data: null,
    };
  }
  return {
    status: "success",
    message: `${dataName} é igual.`,
    data: null,
  };
};

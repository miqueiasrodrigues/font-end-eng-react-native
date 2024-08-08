import { StatusType } from "./types/StatusType";

export interface ResponseInterface {
  status: StatusType;
  message: string;
  data?: any;
}

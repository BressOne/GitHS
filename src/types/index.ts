import { AxiosInstance } from "axios";
import NodeCache from "node-cache";

export type BaseParams = {
  token: string;
};

export type OwnerAndName = {
  owner: string;
  name: string;
};

export type OwnerNamePayload = BaseParams & OwnerAndName;

export interface MyContext {
  ax: (token: string) => AxiosInstance;
}

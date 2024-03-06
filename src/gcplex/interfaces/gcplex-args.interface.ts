import { Storage } from "@google-cloud/storage";

export interface IGplexArgs {
  storageClient?: Storage;
}
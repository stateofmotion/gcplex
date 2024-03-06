import { CloudStorage } from "../cloud-storage";
import { IGplexArgs } from "./interfaces/gcplex-args.interface";

export class GCPlex {
  public storage?: CloudStorage;

  constructor(args: IGplexArgs) {
    if (args.storageClient) {
      this.storage = new CloudStorage(args.storageClient);
    }
  }
}